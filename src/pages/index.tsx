import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout
      nextSeoProps={{
        title: process.env.NEXT_PUBLIC_APP_NAME,
        description: `Your ONE Stop Sourcing & Supplier for all your products`
      }}>
      Test
    </Layout>
  );
}
