import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcrypt';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  const password = await bcrypt.hash('admin123', 10);

  const user = await prisma.user.upsert({
    where: { email: 'admin@ovgs.com' },
    update: {},
    create: {
      name: 'Administrador',
      email: 'admin@ovgs.com',
      password,
    },
  });

  console.log(`Usuário criado: ${user.email}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
