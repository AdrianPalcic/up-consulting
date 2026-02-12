import React from 'react';

const PolitikaPrivatnosti = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-gray-800 mt-20">
      <h1 className="text-3xl font-bold mb-8 text-[#0066cc]">Politika privatnosti</h1>
      
      <p className="mb-6 text-sm text-gray-500 italic">Zadnje ažuriranje: 12. veljače 2026.</p>

      <section className="space-y-6">
        <p>
          Ova Politika privatnosti objašnjava kako <strong>UP Consulting</strong> prikuplja, koristi i štiti vaše osobne podatke kada posjetite našu web stranicu i koristite našu kontakt formu.
        </p>

        <div>
          <h2 className="text-xl font-semibold mb-3">1. Voditelj obrade podataka</h2>
          <p>UP Consulting<br />
          Ulica sv. Mateja 46, Zagreb, 10000, Hrvatska<br />
          Email: info@up-consulting.hr<br />
          Mob: +385 91 5708 476</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">2. Koje podatke prikupljamo?</h2>
          <p>Putem kontakt forme na našoj stranici prikupljamo sljedeće podatke:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Ime i prezime</li>
            <li>Adresa e-pošte (e-mail)</li>
            <li>Broj telefona</li>
            <li>Ime vaše firme</li>
            <li>Sadržaj vaše poruke</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">3. Svrha prikupljanja podataka</h2>
          <p>Vaše podatke prikupljamo isključivo kako bismo:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Odgovorili na vaš upit vezan uz naše usluge poslovnog savjetovanja.</li>
            <li>Pružili informacije o postupcima ishođenja radnih dozvola i viza.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">4. Pravna osnova za obradu</h2>
          <p>
            Podatke obrađujemo na temelju vašeg <strong>dobrovoljnog pristanka</strong> koji dajete klikom na gumb za slanje poruke, te u svrhu poduzimanja radnji na vaš zahtjev prije sklapanja eventualnog ugovora.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">5. Vaša prava</h2>
          <p>U svakom trenutku imate pravo na pristup svojim podacima, ispravak netočnih podataka, brisanje podataka ("pravo na zaborav") te prigovor na obradu. Za ostvarivanje ovih prava, obratite nam se na <strong>info@up-consulting.hr</strong>.</p>
        </div>
      </section>
    </main>
  );
};

export default PolitikaPrivatnosti;