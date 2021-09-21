import { createServer, Factory, Model } from 'miragejs';
import faker from 'faker';

type User = {
    name: string;
    email: string;
    created_at: string;
}

export function makeServer() {
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({})
        },

        factories: {
            user: Factory.extend({
                name(i) {
                    return `User ${i + 1}`
                }, 
                email() {
                    return faker.internet.email().toLowerCase();
                },
                createdAt() {
                    return faker.date.recent(10);

                },
            })
        },

        seeds(server) {
            server.createList('user', 10)
        },

        routes() {
            this.namespace = 'api';
            
            this.timing = 750;

            // MirageJS Shorthands to CREATE and RETRIEVE
            this.get('/users');
            this.post('/users');

            // Clean the namespace to use the Next default api route (pages/api)
            this.namespace = '';
            this.passthrough();
        }
    })
}