
export class Hello {
	constructor() {
		this.firstName = 'John';
		this.lastName = 'Doe';
		this.fromProp = 'FROM PROP';
	}

  sayHello() {
    alert(`Hello ${this.firstName} ${this.lastName}. Nice to meet you.`);
  }
}
