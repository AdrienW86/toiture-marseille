import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactRequestBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis.' },
        { status: 400 }
      );
    }

    const senderEmail = process.env.CONTACT_SENDER_EMAIL;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL;

    if (!senderEmail || !recipientEmail) {
      return NextResponse.json(
        { error: 'Configuration serveur incomplète.' },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: `Nouveau devis : ${subject}`,
      html: `
        <h2>Nouvelle demande de devis</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <hr />
        <h3>Message :</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    if (error) {
      // FIX : On renvoie uniquement la chaîne de caractères (string) 'error.message'
      return NextResponse.json(
        { error: error.message || "Erreur lors de l'envoi de l'email." }, 
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: 'Erreur serveur lors de l\'envoi de l\'email.' },
      { status: 500 }
    );
  }
}