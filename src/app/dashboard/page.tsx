import { auth } from '@clerk/nextjs/server'

export default async function DashboardPage() {
  const { userId, redirectToSignIn } = await auth()
  if (userId === null) redirectToSignIn()

  const products = await getProducts(userId)
  return null
}
