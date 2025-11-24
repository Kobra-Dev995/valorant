import CardAgente from './components/CardAgente';
import Drawer from './components/Drawer';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Home() {
  return (
    <>
      <Drawer>
        <Header />
        <main
          className={`w-full h-[${
            90 * 3
          }vh] flex flex-col items-center justify-center`}
        >
          <section className='bg-amber-200 w-full h-full flex flex-col justify-start items-center relative'>
            <CardAgente
              agente={'bg-[url("/VALORANT_Sage_Light.jpg")]'}
              title={
                'Conheça a Sage, a guardiã que protege seus aliados com habilidades de cura e barreiras.'
              }
              description={
                'Sage é uma agente de suporte no jogo Valorant, conhecida por suas habilidades de cura e proteção. Ela pode curar aliados feridos, criar barreiras para bloquear o avanço inimigo e até mesmo reviver um companheiro de equipe caído. Sua presença é crucial em qualquer equipe, oferecendo suporte vital durante as partidas.'
              }
            />

            <CardAgente
              agente={'bg-[url("/VALORANT_Reyna_Red.jpg")]'}
              title={
                'Conheça a Reyna, a duelista implacável que se alimenta das almas de seus inimigos.'
              }
              description={
                'Reyna é uma agente ofensiva no jogo Valorant, conhecida por sua habilidade de dominar o campo de batalha. Ela pode consumir as almas dos inimigos que elimina para se curar ou aumentar sua letalidade temporariamente. Com suas habilidades agressivas, Reyna é uma escolha popular para jogadores que gostam de assumir o controle das partidas e buscar eliminações rápidas.'
              }
            />

            <CardAgente
              agente={'bg-[url("/VALORANT_Harbor_blue.jpg")]'}
              title={
                'Conheça a Harbor, a agente de controle de território que controla o campo de batalha com habilidades de cura e barreiras.'
              }
              description={
                'Harbor é uma agente de controle no jogo Valorant, conhecida por suas habilidades de manipulação do ambiente. Ele pode criar barreiras de água para bloquear o avanço inimigo e curar aliados próximos. Com sua capacidade de controlar o campo de batalha, Harbor é uma escolha estratégica para jogadores que desejam proteger sua equipe e dominar áreas-chave do mapa.'
              }
            />
          </section>
        </main>
        <Footer />
      </Drawer>
    </>
  );
}
