import { useState } from 'react';
import Layout from '@/components/Layout';
import TextField from '@/components/TextField';
import Button from '@/components/Button';
import { tw } from 'twind/css';

export default function Home() {
  const [form, setForm] = useState({
    dear: ``,
    message: ``,
    from: ``
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout
      nextSeoProps={{
        title: process.env.NEXT_PUBLIC_APP_NAME,
        description: `Your ONE Stop Sourcing & Supplier for all your products`
      }}>
      <section className={tw([`px-8 lg:px-16 py-8 lg:py-14`])}>
        <form>
          <TextField label="Dear" name="dear" type="text" value={form.dear} onChange={handleChange} />

          <TextField label="Message" name="message" type="text" value={form.message} onChange={handleChange} />

          <TextField label="From" name="from" type="text" value={form.from} onChange={handleChange} />

          <Button primary>Download</Button>
        </form>

        {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}
      </section>
    </Layout>
  );
}
