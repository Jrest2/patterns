interface Cloneable {
  clone(): Cloneable;
}

export class GameObject implements Cloneable {
  constructor(private sprite: string,  private position: number) {}
  
  clone() {
    return new GameObject(this.sprite, this.position);
  }
  
  describe() {
    console.log(`Sprite is ${this.sprite}, Position is ${this.position}`);
  }
}


