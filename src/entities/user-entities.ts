/* interface IUserProps {
  id?: string;
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
} */
export class User {
  public id?: string;
  public name: string;
  public email: string;
  public password: string;
  public createdAt?: Date;
  constructor(props: User) {
    Object.assign(this, props);
  }
}
