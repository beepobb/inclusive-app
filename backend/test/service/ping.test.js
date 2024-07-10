import { ping } from "../../src/service/ping.js";


describe('ping', () => {
    it('is able to pong', () => {
        expect(ping()).toBe('pong');
    });
});
