import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { ObraDeArteService } from './obradearte.service';
import { Server, Socket } from 'socket.io';
import { CreateObraDeArteDto } from './dto/obradearte.dto.';

@WebSocketGateway({ cors: true })
export class ObraDeArteGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss: Server;

  constructor(private readonly obraDeArteService: ObraDeArteService) {}

  async handleConnection(client: Socket, ...args: any[]) {
    const token = client.handshake.headers.authentication as string;
    try {
      await this.obraDeArteService.registerClient(client, token);
    } catch (error) {
      client.disconnect();
      return;
    }
    this.wss.emit('clients-updated', this.obraDeArteService.getConnectedClients());
  }

  handleDisconnect(client: Socket) {
    this.obraDeArteService.removeClient(client.id);
    this.wss.emit('clients-updated', this.obraDeArteService.getConnectedClients());
  }

  @SubscribeMessage('enviarexamen6B')
  async onMessageFromClient(client: Socket, payload: CreateObraDeArteDto): Promise<void> {
    const registro = await this.obraDeArteService.create([payload]);

    // Obtener todos los clientes conectados
    const connectedClients = this.obraDeArteService.getConnectedClients();
    
    // Filtrar clientes por empresa
    const clientsToNotify = Object.values(connectedClients).filter(connectedClient => {
      const connectedClientObject = JSON.parse(connectedClient);
      const userCompany: string = this.getUserCompany(connectedClientObject.user.id);
      return userCompany === payload.empresa;
    }).map(client => {
      const clientObject = JSON.parse(client);
      return clientObject.socket;
    });

    // Emitir el mensaje solo a los clientes filtrados
    clientsToNotify.forEach(clientSocket => {
      clientSocket.emit('examen6B', {
        fullName: this.obraDeArteService.getUserfullName(client.id),
        message: registro,
      });
    });
  }
  getUserCompany(id: any): string {
    throw new Error('Method not implemented.');
  }
}
