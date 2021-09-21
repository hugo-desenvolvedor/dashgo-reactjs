import { createServer, Factory, Model, Response } from 'miragejs';
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
            server.createList('user', 200)
        },

        routes() {
            this.namespace = 'api';
            
            this.timing = 750;

            // MirageJS Shorthand to retrieve and paginate users
            this.get('/users', function (schema, request) {
                const { page = 1, per_page = 10 } = request.queryParams

                const total = schema.all('user').length

                const pageStart = (Number(page) - 1) * Number(per_page)
                const pageEnd = pageStart + Number(per_page)

                const users = this.serialize(schema.all('user'))
                    .users.slice(pageStart, pageEnd)

                return new Response(
                    200,
                    {
                        'x-total-count': String(total)
                    },
                    { users }
                )
            });

            // MirageJS Shorthand to create a user
            this.post('/users');

            // Clean the namespace to use the Next default api route (pages/api)
            this.namespace = '';
            this.passthrough();
        }
    })
}