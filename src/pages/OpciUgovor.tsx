import React, { useEffect } from 'react';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import { Helmet } from 'react-helmet';

const OpciUgovor: React.FC = () => {
  // Update document title
  useEffect(() => {
    document.title = 'Kezele Prijevoz i Turistička Agencija | Opći Ugovor';
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Opći Ugovor | Kezele Prijevoz i Turistička Agencija</title>
        <meta name="description" content="Opći uvjeti i upute za putovanje Kezele Prijevoz i Turističke Agencije. Informacije o rezervacijama, plaćanju, otkazivanjima i pravima putnika." />
        <meta name="keywords" content="opći uvjeti, ugovor o putovanju, prava putnika, otkazivanje putovanja, uvjeti rezervacije, turistička agencija uvjeti, putno osiguranje, reklamacije" />
      </Helmet>
      <Navigation />
      
      <div className="pt-32 pb-16 bg-light-gray">
        <div className="container mx-auto px-4 md:px-16">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-red text-center mb-8">Opći Ugovor</h1>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {/* UVJETI PUTOVANJA */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-primary-red mb-4">UVJETI PUTOVANJA</h2>
              <p className="mb-4">Ovi uvjeti i upute za putovanje su sastavni dio ugovora, odnosno vouchera koji zaključuju Kezele prijevoz i turistička agencija j.d.o.o. (u daljnjem tekstu: agencija) i putnik, odnosno ugovaratelj putovanja.</p>
              <p>Sve navedeno u ovim uvjetima i uputama za putovanje obvezuje obje ugovorne strane isto kao i odredbe posebnog dogovora (ugovora), ako s istima nisu u suprotnosti.</p>
            </section>
            
            {/* PRIJAVA */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-primary-red mb-4">PRIJAVA</h2>
              <p className="mb-4">Putnik se za putovanje može prijaviti u svim poslovnicama i drugim ovlaštenim agencijama osobno, telefonom, telefaksom, e-mailom ili putem Interneta. Prilikom prijave, agencija i putnik/ugovaratelj putovanja zaključuju ugovor koji sadrži sve podatke o putovanju ili se poziva na program putovanja, kao i na ove Uvjete. Prilikom prijave putnik je dužan navesti sve podatke i priložiti dokumente koje zahtijeva program putovanja te platiti akontaciju i troškove prijave.</p>
              <p className="mb-4">U slučaju da putnik ne navede točne podatke, odgovoran je za sve troškove odnosno posljedice nastale zbog netočnih podataka. Od trenutka prijave do dana početka putovanja putnik može prenijeti svoj aranžman na drugu osobu ako taj drugi udovoljava svim uvjetima putovanja uz obvezu da o tome obavijesti agenciju najmanje 8 dana prije početka putovanja te da mu agencija to i potvrdi. Ustupanjem aranžmana, ustupatelj i primatelj aranžmana su solidarno odgovorni agenciji za uplatu cijelog iznosa aranžmana i troškova povezanih s prijenosom.</p>
            </section>

            {/* SADRŽAJ ARANŽMANA */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-primary-red mb-4">SADRŽAJ ARANŽMANA</h2>
              <p className="mb-4">Što aranžman sadrži navedeno je u programu putovanja. Posebne usluge, kao i one tražene nakon zaključenja ugovora, koje nisu uključene u cijenu aranžmana, putnik posebno plaća organizatoru. Organizator će u granicama mogućnosti nastojati udovoljiti putnikovim posebnim zahtjevima, ali ne može jamčiti ispunjenje takvih zahtjeva.</p>
            </section>
            
            {/* CIJENA ARANŽMANA */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-primary-red mb-4">CIJENA ARANŽMANA</h2>
              <p className="mb-4">Cijena aranžmana uključuje one usluge navedene u programu pod „Cijena uključuje", kao i sve ostale troškove koji su povezani s izvršenjem usluga. Posebne usluge su one usluge koje nisu uključene u cijenu pa ih stoga putnik posebno plaća. Ove se usluge trebaju zatražiti prilikom prijave i doplaćuju se na cijenu aranžmana. Cijene se temelje na dogovoru s pružateljima usluge i ne moraju odgovarati onima koje su na licu mjesta.</p>
              <p>Nakon zaključenja ugovora, agencija može promijeniti cijenu samo kao posljedicu promjena objektivnih okolnosti predviđenih zakonom, o čemu je dužna obavijestiti putnika najkasnije 20 dana prije početka putovanja, a ako je povećanje cijene veće od 10%, putnik ima pravo raskinuti ugovor bez obveze da naknadi štetu.</p>
            </section>
            
            {/* PROMJENE U PROGRAMU */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-primary-red mb-4">PROMJENE U PROGRAMU</h2>
              <p className="mb-4">Agencija ima pravo promijeniti program ukoliko nastupe izvanredne okolnosti koje se ne mogu predvidjeti, izbjeći ili otkloniti (ratovi, štrajkovi, terorističke akcije, sanitarni poremećaji, elementarne nepogode, prometni zastoji, nepovoljni meteorološki uvjeti, intervencije nadležnih vlasti i sl). Ako agencija prije početka putovanja značajnije izmijeni program, smještaj ili cijenu, dužna je bez odgode o tome obavijestiti putnika u pisanom obliku.</p>
              <p className="mb-4">Putnik može u roku od dva radna dana od primitka agencijske obavijesti prihvatiti izmijenjeni program ili ga odbiti. U slučaju odbitka ili oglušivanja na ponudu, agencija se obvezuje u roku od 7 radnih dana vratiti putniku uplaćeni dio cijene. U slučaju prihvata, zamjenski aranžman koji je putniku ponuđen, agencija neće imati obvezu novčanog poravnavanja s njim ako je ponuđeni aranžman ukupno gledano iste ili više kvalitete i cijene.</p>
              <p className="mb-4">Ako nakon početka putovanja nije pružen znatan dio usluga, ili agencija utvrdi da neće biti u stanju osigurati znatan dio usluga, agencija će o vlastitom trošku izvršiti odgovarajuće izmjene programa za nastavak putovanja te po potrebi obeštetiti putnika za razliku u cijeni između ugovorenih i stvarno pruženih usluga. Uz pisani pristanak putnika agencija može neizvršeni dio usluge zamijeniti nekom drugom uslugom, pri čemu se putnik odriče prava na potraživanja od agencije za tako međusobno ugovoreni i izmijenjeni dio putovanja u odnosu na sklopljeni ugovor o putovanju. Ako takva izmjena programa ne bi bila moguća, agencija se obvezuje
putniku omogućiti povratak na mjesto polaska ili drugo mjesto, aranžmanom koji je ukupno gledajući iste ili više kvalitete od onog što je bilo ugovoreno i nadoknaditi mu eventualnu razliku u cijeni između ugovorene i
stvarno izvršene usluge.</p>
            </section>
            
            {/* KATEGORIZACIJA I OPIS USLUGA */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-primary-red mb-4">KATEGORIZACIJA I OPIS USLUGA</h2>
              <p className="mb-4">Ponuđeni smještajni objekti, restorani, prijevozna sredstva i dr. opisani su prema službenoj kategorizaciji dotične zemlje u vrijeme izdavanja programa. Standardi smještaja, prehrane, usluga i drugih sadržaja pojedinih mjesta su različiti i nisu usporedivi. Informacije koje putnik dobije usmeno ili pismeno na prodajnom mjestu, telefonom, putem e-maila ili na drugi način ne obvezuju agenciju u većoj mjeri nego informacije navedene u programu putovanja.</p>
            </section>
            
            {/* SMJEŠTAJ */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-primary-red mb-4">SMJEŠTAJ</h2>
              <p className="mb-4">Ukoliko putnik nije izričito ugovorio smještaj posebnih obilježja, isti će prihvatiti bilo koju službeno registriranu smještajnu jedinicu u objektu opisanom u programu putovanja. Raspored smještaja u sobama ili apartmanima određuje recepcija u mjestu boravka. U slučaju da je u programu putovanja smještaj izričito naveden, agencija će uvažiti želje putnika ukoliko je to moguće.</p>
              <p className="mb-4">Ako je moguće, agencija će pokušati udovoljiti zahtjevu posebnog oblika smještaja (komfor, orijentacija sobe, kat i sl.) ali ne može jamčiti ispunjenje takvih zahtjeva, koji nisu posebno dogovoreni i navedeni (i plaćeni) u ugovoru. Molbe i želje bez posebne nadoplate agencija ne smatra ugovorom i iste će nastojati zadovoljiti u granicama mogućnosti, ali ih ne može garantirati.</p>
            </section>
            
            {/* PUTNE ISPRAVE I POŠTIVANJE PROPISA */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-primary-red mb-4">PUTNE ISPRAVE I POŠTIVANJE PROPISA</h2>
              <p className="mb-4">Putnik je prilikom prijave ili do isteka roka koji je u programu putovanja označen, dužan agenciji dostaviti sve podatke i dokumente potrebne za organizaciju putovanja. Putnik je dužan osigurati da su njegove osobne putne isprave i isprave za prelazak granice važeće te da ima dokaz o cijepljenju i ostalu dokumentaciju potrebnu za ulazak u sve zemlje koje su obuhvaćene programom putovanja. Agencija ne odgovara za odluke carinskih, policijskih i drugih službenih tijela kojima se putniku ne dozvoljava ulazak ili izlazak iz pojedine zemlje te takav putnik sam snosi sve direktne i indirektne posljedice i troškove.</p>
              <p>Putnik je dužan poštovati dogovoreni kućni red u ugostiteljskim i smještajnim objektima te dobronamjerno surađivati s predstavnikom organizatora i davateljem usluga. U slučaju nepoštivanja ovih obveza, putnik odgovara za uzrokovanu štetu, a agencija otklanja svaku odgovornost za takvu štetu. U tom slučaju iznos štete putnik plaća na mjestu događaja.</p>
            </section>
            
            {/* PUTNO OSIGURANJE */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-primary-red mb-4">PUTNO OSIGURANJE</h2>
              <p className="mb-4">Cijene putovanja, ako u programu nije drugačije navedeno, ne uključuju osiguranje putnika (nezgoda, bolest, prtljaga, otkaz).</p>
              <p className="mb-4">Prilikom prijave za putovanje, agencija će putniku ponuditi paket putnog osiguranja. Polica osiguranja od posljedica nesretnog slučaja i bolesti na putovanju, oštećenja i gubitka prtljage, dragovoljnog zdravstvenog osiguranja za vrijeme boravka u inozemstvu, osiguranje za slučaj otkaza putovanja te osiguranje kojim se osiguravaju troškovi pomoći i povratka putnika u mjesto polazišta u slučaju nesreće i bolesti. U slučaju nesklapanja ovog osiguranja, putnik snosi troškove i posljedice ako do tih slučajeva dođe.</p>
            </section>
            
            {/* OSIGURANJE OD RIZIKA OTKAZA PUTOVANJA */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-primary-red mb-4">OSIGURANJE OD RIZIKA OTKAZA PUTOVANJA</h2>
              <p className="mb-4">Ako putnik prilikom prijave za putovanje predviđa da bi zbog određenih situacija morao otkazati putovanje, preporučamo uplatu police osiguranja od otkaza. Osiguranje od otkaza ne može se uplatiti naknadno nego samo kod prijave za putovanje.</p>
              <p>Osiguranje od otkaza vrijedi samo u sljedećim slučajevima, i to uz obaveznu pismenu potvrdu: vojni poziv, bolest, smrtni slučaj u užoj obitelji. Ako putnik nema ugovoreno osiguranje od otkaza, a mora otkazati putovanje i ima potvrdu o vojnom pozivu, bolesti ili smrtnom slučaju, agencija zadržava pravo isplate prema pravilima navedenim u članku 9. ovih općih uvjeta. Kod otkazivanja aranžmana ne isplaćuje se trošak nabavke viza i usluge rezervacije npr. kupnje karata za određene objekte, brodske karte i sl. koje je agencija platila. Ukoliko putnik otkaže uplaćeno putovanje, agencija od ukupne cijene putovanja zadržava sljedeće (ako u programu nije drugačije navedeno):</p>
              <ol className="list-decimal ml-8 mb-4 space-y-2">
                <li>do 30 dana prije polaska – 10% cijene aranžmana, a najmanje 100 kn</li>
                <li>29-22 dana prije polaska – 30% cijene aranžmana</li>
                <li>21-15 dana prije polaska – 40% cijene aranžmana</li>
                <li>14-8 dana prije polaska – 80% cijene aranžmana</li>
                <li>7-0 dana prije polaska – 100% cijene aranžmana</li>
                <li>nakon polaska – 100% cijene aranžmana</li>
              </ol>
              <p>Navedeni troškovi primjenjuju se i na promjene datuma polaska ili smještajnog objekta. Organizator putovanja, u slučaju da putnik koji je rezervirao putovanje nađe novog korisnika iste rezervacije, a koji ispunjava sve predviđene uvjete, agencija zaračunava samo troškove uzrokovane zamjenom. Kod otkazivanja svih ili pojedinih usluga zbog nepredviđenih okolnosti (više sile) koje se mogu dokazati, putnik ima pravo na povrat samo nerealiziranog dijela uplaćenog iznosa.</p>
            </section>
            
            {/* OTKAZ PUTOVANJA OD STRANE AGENCIJE ILI PROMJENA PROGRAMA PUTOVANJA */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-primary-red mb-4">OTKAZ PUTOVANJA OD STRANE AGENCIJE ILI PROMJENA PROGRAMA PUTOVANJA</h2>
              <p className="mb-4">Agencija ima pravo otkazati putovanje prije početka putovanja ako nastupe izvanredne okolnosti koje se nisu mogle predvidjeti niti otkloniti. Agencija ima pravo raskinuti ugovor ili napraviti izmjene u programu ako prije ili za vrijeme trajanja putovanja nastupe izvanredne okolnosti koje nije bilo moguće predvidjeti niti izbjeći, a koje bi, da su postojale u vrijeme sklapanja ugovora, bile opravdan razlog agenciji da ne sklopi ugovor. Izvanredne okolnosti se smatraju ratovi, katastrofe, administrativne mjere nadležnih državnih tijela, vremenske nepogode i slični slučajevi koji direktno mogu ugroziti sigurnost putnika.</p>
              <p className="mb-4">U takvim slučajevima, agencija ima pravo uplaćeni iznos aranžmana ili naknadu štete zamijeniti za neko drugo putovanje u najmanje istoj vrijednosti. Agencija je dužna putniku vratiti razliku u cijeni, ako je novo ponuđeno putovanje niže cijene, a putnik prihvatio ponuđeno drugo putovanje. Ako ne prihvati ponuđeno drugo putovanje, Putnik ima pravo na povrat cijelog uplaćenog iznosa. Putnik u tim slučajevima nema pravo potraživati naknadu štete ili troškova nastalih otkazom putovanja, ali ima pravo potraživati povrat uplaćene vrijednosti.</p>
              <p>Agencija ne preuzima odgovornost za promjene zbog nepredviđenih okolnosti i više sile u toku putovanja. U tom slučaju, može osigurati usluge s obzirom na datu situaciju.</p>
            </section>
            
            {/* OTKAZIVANJE PUTOVANJA OD STRANE PUTNIKA */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-primary-red mb-4">OTKAZIVANJE PUTOVANJA OD STRANE PUTNIKA</h2>
              <p className="mb-4">Ukoliko putnik otkaže uplaćeno putovanje, agencija od ukupne cijene zadržava sljedeći iznos (ako u programu nije drugačije navedeno):</p>
              <ol className="list-decimal ml-8 mb-4 space-y-2">
                <li>do 30 dana prije polaska – 10% cijene aranžmana, a najmanje 100 kn</li>
                <li>29-22 dana prije polaska – 30% cijene aranžmana</li>
                <li>21-15 dana prije polaska – 40% cijene aranžmana</li>
                <li>14-8 dana prije polaska – 80% cijene aranžmana</li>
                <li>7-0 dana prije polaska – 100% cijene aranžmana</li>
                <li>nakon polaska – 100% cijene aranžmana</li>
              </ol>
              <p className="mb-4">Navedeni troškovi primjenjuju se i na promjene datuma polaska ili smještajnog objekta. Ne pokazivanje putnika na mjestu polaska, ne smatramo odustajanjem od putovanja, nego se smatra da je putnik odustao od putovanja nakon polaska odnosno da je odustao od ugovora.</p>
            </section>
            
            {/* REKLAMACIJE PUTNIKA */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-primary-red mb-4">REKLAMACIJE PUTNIKA</h2>
              <p className="mb-4">Ako su usluge iz programa nepotpuno ili nekvalitetno izvršene, putnik može zahtijevati razmjernu odštetu tako da priloži pismeni prigovor. Svaki putnik - nositelj ugovora prigovor podnosi zasebno. Agencija neće uzeti u razmatranje grupne prigovore.</p>
              <p className="mb-4">POSTUPAK RJEŠAVANJA PRIGOVORA:</p>
              <ol className="list-decimal ml-8 mb-4 space-y-2">
                <li>Odmah na samom mjestu pružanja usluge, putnik treba nepravilnost reklamirati predstavniku agencije, a ako ovoga nema, pružatelju usluge.</li>
                <li>Putnik je dužan surađivati s predstavnikom agencije i pružateljem usluga u dobroj namjeri da se otklone uzroci prigovora. Ako putnik na samom mjestu ne prihvati ponuđeno rješenje prigovora koje odgovara uplaćenoj usluzi, agencija neće uvažiti naknadnu putnikovu reklamaciju niti će uzeti u razmatranje bilo kakvu naknadu štete.</li>
                <li>Ako uzrok prigovora ne bi bio otklonjen, putnik s predstavnikom agencije ili na recepciji sastavlja pismeni izvještaj.</li>
                <li>Najkasnije 8 dana po povratku s puta, putnik predaje pismeni prigovor u prodajnom mjestu gdje je uplatio aranžman, te prilaže pismenu potvrdu koju je potpisao predstavnik i eventualne račune za dodatne troškove. Agencija će primiti u postupak samo potpuno dokumentirane pritužbe koje primi u navedenom roku od 8 dana.</li>
                <li>Agencija je dužna donijeti pismeno rješenje na ovaj prigovor u roku od 15 dana po primitku prigovora u prodajnom mjestu. Agencija može odgoditi rok rješenja pritužbe zbog prikupljanja informacija i provjere navoda žalbe kod davalaca usluga. Agencija će rješavati samo one pritužbe kojima se uzrok nije mogao otkloniti u mjestu odmora.</li>
                <li>Dok agencija ne odluči o prigovoru, putnik se odriče posredovanja bilo koje druge osobe, sudske ustanove ili davanja informacija u javna glasila. Najviša naknada po prigovoru može doseći iznos reklamiranog dijela usluga, a ne može obuhvatiti već iskorištene usluge, niti cjelokupni iznos aranžmana. Ovime se isključuje pravo putnika na naknadu idealne štete.</li>
              </ol>
            </section>
            
            {/* KORIŠTENJE RUČNE PRTLJAGE PRILIKOM PUTOVANJA AUTOBUSOM */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-primary-red mb-4">KORIŠTENJE RUČNE PRTLJAGE PRILIKOM PUTOVANJA AUTOBUSOM</h2>
              <p className="mb-4">Putnicima je dozvoljeno sa sobom u autobus ponijeti jedan (1) komad osobne prtljage koja se može pohraniti ispod ili iznad sjedala na police (težine do 5 kg), te jedan (1) komad osobne prtljage koja ide u prtljažni prostor (težine do 15 kg).</p>
              <p>Agencija zadržava pravo promjene dimenzija i težina dozvoljene prtljage.</p>
            </section>
            
            {/* ZDRAVSTVENI PROPISI */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-primary-red mb-4">ZDRAVSTVENI PROPISI</h2>
              <p className="mb-4">Putnik je dužan upoznati se sa zdravstvenim propisima zemalja u koje putuje vezano uz COVID-19 pandemiju (npr. cijepljeni, PCR testovi, karantena, izolacija, formular za prelazak granice, "covidpass"). Agencija ima pravo zatražiti od putnika potvrdu o cijepljenju, preboljenju ili testiranju na COVID-19 ako je takva potvrda uvjet putovanja. Putovanje u neke zemlje zahtijeva cijepljenje protiv određenih bolesti te je putnik dužan prije putovanja obaviti obavezna cijepljenja kao i posjedovati potvrde i dokumente o tome. Preporučamo putno osiguranje.</p>
            </section>
            
            {/* PRTLJAGA */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-primary-red mb-4">PRTLJAGA</h2>
              <p className="mb-4">Prijevoz prtljage određene težine uključen je u cijenu aranžmana. Za prekoračenje agencije mogu naplatiti doplatu, no u svakom slučaju prijevoznik nije dužan primiti višak prtljage. Sami putnici se moraju brinuti o svojoj prtljazi. Agencija ne preuzima nikakvu odgovornost za oštećenu ili izgubljenu prtljagu, ali će nastojati, u granicama mogućnosti, pomoći putniku u rješavanju problema.</p>
            </section>
            
            {/* TOČNOST PRIJEVOZNIKA */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-primary-red mb-4">TOČNOST PRIJEVOZNIKA</h2>
              <p className="mb-4">Agencija ne odgovara za točnosti prijevoza ni u cestovnom, željezničkom, pomorskom, riječnom i zračnom prijevozu. Prijevoznici odgovaraju isključivo na temelju odgovarajućih zakona i međunarodnih konvencija.</p>
            </section>
            
            {/* GUBITAK DOKUMENATA */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-primary-red mb-4">GUBITAK DOKUMENATA</h2>
              <p className="mb-4">Ako tijekom putovanja putnik izgubi ili mu ukradu putne dokumente, troškove izdavanja novih dokumenata snosi sam putnik.</p>
            </section>
            
            {/* INFORMACIJE */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-primary-red mb-4">INFORMACIJE</h2>
              <p className="mb-4">Obavijesti koje putnik dobije na prijavnom mjestu ne obvezuju agenciju u većoj mjeri nego što su obavijesti navedene u samom programu putovanja.</p>
            </section>
            
            {/* POSEBNI UVJETI */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-primary-red mb-4">POSEBNI UVJETI</h2>
              <p className="mb-4">Za putovanja posebnim zrakoplovnim aranžmanima, incentiv putovanja, aranžmane na bazi redovnih letova, grupne aranžmane, kongrese i slično, javnim brodom, vlakom, hidrogliserom, hotelijerima i sl. mogu vrijediti posebna pravila. Putnici su dužni prije ugovaranja takvih aranžmana, zatražiti informacije o važećim uvjetima i isti čine sastavni dio ugovora o putovanju.</p>
            </section>
            
            {/* ZAVRŠNE ODREDBE */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-primary-red mb-4">ZAVRŠNE ODREDBE</h2>
              <p className="mb-4">Ovi Uvjeti i upute za putovanje isključuju sve dosadašnje uvjete i upute za putovanje. Opći uvjeti i upute za putovanje su sastavljeni u skladu sa Zakonom o pružanju usluga u turizmu (NN 130/17), Zakonom o obveznim odnosima (NN 35/05, 41/08 i 125/11, 78/15, 29/18), Zakonu o zaštiti potrošača (NN 41/14, 110/15, 14/19) i Direktivom EU 2015/2302 o putovanjima u paket aranžmanu i povezanim putnim aranžmanima od 25. studenog 2015. koja je implementirana u hrvatski Zakon o pružanju usluga u turizmu.</p>
            </section>
            
            {/* NAPOMENA O NADLEŽNOSTI SUDA */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-red mb-4">NAPOMENA O NADLEŽNOSTI SUDA</h2>
              <p>U slučaju spora između stranaka nadležan je stvarno nadležni sud u Bjelovaru.</p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OpciUgovor;