import Head from 'next/head';
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Boilerplate</title>
        <meta name="description" content="A basic Next.js boilerplate application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Card>
          <CardHeader>
            <CardTitle>Hello world!</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This is an example</p>
            <hr className="my-4" />
            <Button onClick={() => setCount(count + 1)}>Click me</Button>
            <div>Count: {count}</div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}