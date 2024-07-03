import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { ControlRealizadoService } from './ControlRealizado.service';
import { Server, Socket } from 'socket.io';
import { CreateControlRealizadoInput } from './dto/create-controlrealizado.dto';

@WebSocketGateway({ cors: true })
export class ControlRealizadoGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss: Server;

  constructor(private readonly controlRealizadoService: ControlRealizadoService) {}

  async handleConnection(client: Socket, ...args: any[]) {
    const token = client.handshake.headers.authentication as string;
    try {
      await this.controlRealizadoService.registerClient(client, token);
    } catch (error) {
      client.disconnect();
      return;
    }
    this.wss.emit('clients-updated', this.controlRealizadoService.getConnectedClients());
  }

  handleDisconnect(client: Socket) {
    this.controlRealizadoService.removeClient(client.id);
    this.wss.emit('clients-updated', this.controlRealizadoService.getConnectedClients());
  }

  @SubscribeMessage('enviarmensaje')
  async onMessageFromClient(client: Socket, payload: CreateControlRealizadoInput): Promise<void> {
    const registro = await this.controlRealizadoService.create(payload);
    this.wss.emit('escucharmensaje', {
      fullName: this.controlRealizadoService.getUserfullName(client.id),
      message: registro,
    });
  }
}
