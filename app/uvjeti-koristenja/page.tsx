import React from 'react';

const UvjetiKoristenja = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-[#0066cc]">Uvjeti korištenja</h1>

      <section className="space-y-8 text-leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-3">1. Opći uvjeti</h2>
          <p>
            Dobrodošli na web stranicu <strong>UP Consulting</strong>. Korištenjem ove stranice pristajete na navedene uvjete. Sadržaj stranice služi isključivo u informativne svrhe vezane uz poslovno savjetovanje i posredovanje pri zapošljavanju.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">2. Intelektualno vlasništvo</h2>
          <p>
            Sav sadržaj objavljen na ovoj stranici (tekstovi, logotip, grafička rješenja) vlasništvo je UP Consultinga. Neovlašteno kopiranje, preuzimanje ili korištenje materijala u komercijalne svrhe bez prethodne pismene suglasnosti nije dopušteno.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">3. Ograničenje odgovornosti</h2>
          <p>
            UP Consulting ulaže razumne napore kako bi informacije na stranici bile točne i ažurne, ali ne jamči za njihovu potpunu točnost u svakom trenutku. Informacije o vizama i radnim dozvolama podložne su promjenama zakona država u kojima se primjenjuju te ne predstavljaju konačan pravni savjet.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">4. Vanjske poveznice</h2>
          <p>
            Ova web stranica može sadržavati poveznice na stranice trećih strana (npr. službene stranice veleposlanstava). UP Consulting nema utjecaj na sadržaj tih stranica i ne preuzima odgovornost za njihovu dostupnost ili sigurnost.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">5. Izmjene uvjeta</h2>
          <p>
            Zadržavamo pravo izmjene ovih uvjeta korištenja u bilo kojem trenutku. Sve promjene stupaju na snagu trenutkom objave na ovoj web stranici.
          </p>
        </div>
      </section>
    </main>
  );
};

export default UvjetiKoristenja;