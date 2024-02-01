// src/pages/api/create-checkout-session.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { Stripe } from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price: 'your_price_id', // Replace with your actual Stripe price ID
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: 'https://yourwebsite.com/success',
        cancel_url: 'https://yourwebsite.com/cancel',
      });

      res.json({ sessionId: session.id });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
