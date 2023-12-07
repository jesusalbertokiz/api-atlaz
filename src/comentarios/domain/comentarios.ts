export class Comentarios {
  constructor(
    public readonly id: string,
    public readonly idPost: string,
    public readonly idUser: string,
    public readonly text: string,
    public readonly created: string,
  ) {}
}
