import Redis from "ioredis";

const client = new Redis("redis://default:380871ff6b3a4a96afc3a8bc43448e2a@apn1-credible-sawfish-34328.upstash.io:34328");

export default client;
