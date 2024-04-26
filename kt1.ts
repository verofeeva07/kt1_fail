//создали класс User
class User {
    public name: string;
    public login: string;
    public password: string;
    public grade: number;
    static count: number = 0;

    constructor(name: string, login: string, password: string, grade: number){
        this.name = name;
        this.login = login;
        this.password = password;
        this.grade = grade;
        User.count++

    }

    public set _name(newName: string) {
    this.name = newName;
  }

    public get _name(): string {
    return this.name;
  }

    public get _login(): string {
    return this.login;
  }

    public set _password(newPassword: string) {
    this.password = newPassword;
  }

    public get _password(): string {
    return "********";
  }

    showIhfo(){
        console.log(`Name: ${this.name}, Login: ${this.login}`)
}
}
class SuperUser extends User{
    public role: string;
    static count: number =0;

    constructor(name: string, login: string, password: string, role: string, grade: number) {
    super(name, login, password, grade);
    this.role = role;
    SuperUser.count++;
  }

   set _role(newRole: string) {
    this._role = newRole;
  }

  get _role(): string {
    return this._role;
  }


  showIhfo (){
    console.log(`Name: ${this.name}, Login: ${this.login}, Role: ${ this.role}`)
  }

}

