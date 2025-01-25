import "@stdlib/deploy";

contract Addresses with Deployable {
    // 264-bit
    // storing 1000  address 0.189 TON per year
    a1: Address = address("EQBCh-caGLbWWz74p1Q6NW-WqLmIOIOROAyHWgREnCgnY-D8"); // bouncable
    a2: Address = address("UQBCh-caGLbWWz74p1Q6NW-WqLmIOIOROAyHWgREnCgnY705");
    a3: Address;
    a4: Address;
    a5: Address;
    a6: Address;
    init(){
        self.a3 = newAddress(0, 0x4287e71a18b6d65b3ef8a7543a356f96a8b988388391380c875a04449c282763);
        self.a4 = myAddress();
        self.a5 = sender();
        self.a6 = newAddress(0, 0);
    }

    receive(){
        self.a1 == self.a2; // true
        self.a2 == self.a3; // true
    }
}