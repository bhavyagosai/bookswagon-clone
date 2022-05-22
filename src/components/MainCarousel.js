import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function MainCarousel() {
  return (
    <Carousel
      autoPlay
      emulateTouch
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      useKeyboardArrows
      className="flex items-center justify-center w-full h-full"
      centerMode
      autoFocus
      showIndicators={false}
      // centerSlidePercentage={50}
    >
      <div className="w-[calc(60rem)] bg-transparent/5 backdrop-blur-xl rounded-2xl border border-white border-opacity-20">
        {/* <img src="https://wallpapercave.com/dwp1x/wp5823798.jpg" /> */}
        <div class="card card-side bg-base-100 shadow-xl bg-white/20">
          <figure>
            <img
              src="https://external-preview.redd.it/3UFGp52hGPhDRV25NW1ncIhkQW9B2kSwE7sTkjU4sK0.jpg?auto=webp&s=717d9650566226a6379f3e65e16ebd17c1787840"
              alt="Movie"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">One Piece</h2>
            <p className="w-[calc(30rem)] text-justify">
              The series focuses on Monkey D. Luffy, a young man made of rubber,
              whom, inspired by his childhood idol, the powerful pirate
              Red-Haired Shanks, sets off on a journey from the East Blue Sea to
              find the mythical treasure, the One Piece, and proclaim himself
              the King of the Pirates. They are joined in their journey by Nami,
              a money-obsessed thief and navigator; Usopp, a sniper and
              compulsive liar; and Sanji, a perverted but chivalrous chef. They
              acquire a ship, the Going Merry, and engage in confrontations with
              notorious pirates of the East Blue. As Luffy and his crew set out
              on their adventures, others join the crew later in the series,
              including Tony Tony Chopper, an anthropomorphized reindeer doctor;
              Nico Robin, an archaeologist and former Baroque Works assassin;
              Franky, a cyborg shipwright; Brook, a skeleton musician and
              swordsman; and Jimbei, a fish-man helmsman and former member of
              the Seven Warlords of the Sea. Once the Going Merry is damaged
              beyond repair, Franky builds the Straw Hat Pirates a new ship, the
              Thousand Sunny, Together, they encounter other pirates, bounty
              hunters and soldiers of the corrupt World Government, and various
              other friends and foes, as they sail the seas in pursuit of their
              dreams.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[calc(60rem)] bg-transparent/5 backdrop-blur-xl rounded-2xl border border-white border-opacity-20">
        <div class="card card-side bg-base-100 shadow-xl bg-white/20">
          <figure>
            <img
              src="https://wallpapercave.com/uwp/uwp746222.jpeg"
              alt="Movie"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Haikyuu!!</h2>
            <p className="w-[calc(30rem)] text-justify">
              Ever since having witnessed the "Little Giant" and his astonishing
              skills on the volleyball court, Shouyou Hinata has been bewitched
              by the dynamic nature of the sport. Even though his attempt to
              make his debut as a volleyball regular during a middle school
              tournament went up in flames, he longs to prove that his
              less-than-impressive height ceases to be a hindrance in the face
              of his sheer will and perseverance. When Hinata enrolls in
              Karasuno High School, the Little Giant's alma mater, he believes
              that he is one step closer to his goal of becoming a professional
              volleyball player. Although the school only retains a shadow of
              its former glory, Hinata's conviction isn't shaken until he learns
              that Tobio Kageyama—the prodigy who humiliated Hinata's middle
              school volleyball team in a crushing defeat—is now his teammate.
              To fulfill his desire of leaving a mark on the realm of
              volleyball—so often regarded as the domain of the tall and the
              strong—Hinata must smooth out his differences with Kageyama. Only
              when Hinata learns what it takes to be a part of a team will he be
              able to join the race to the top in earnest.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[calc(60rem)] bg-transparent/5 backdrop-blur-xl rounded-2xl border border-white border-opacity-20">
        <div class="card card-side bg-base-100 shadow-xl bg-white/20">
          <figure>
            <img
              src="https://64.media.tumblr.com/3a1f5a907205eba1518ecdf21481a715/d21ddd8f1b57c783-a9/s1280x1920/982da59819c0dfe20e8e1ec39cb55c165f40ad0f.jpg"
              alt="Movie"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Dragon Ball Super</h2>
            <p className="w-[calc(30rem)] text-justify">
              Several months after the defeat of Majin Buu, Goku is seen working
              as a farmer, and his family and friends live peacefully. However,
              the God of Destruction Beerus awakens after decades of slumber.
              Beerus, along with his Angel assistant and teacher, Whis, seeks a
              warrior known as the Super Saiyan God, threatening to destroy the
              Earth if he loses to him. Goku transforms into the Super Saiyan
              God with the help of his friends, battles Beerus and loses, but
              his efforts appease Beerus, who spares the planet. Afterwards,
              while Goku and Vegeta train, with Whis as their teacher, the
              remnants of Frieza's army collect the Dragon Balls and revive
              Frieza. After training, Frieza returns to Earth, seeking revenge.
              Despite achieving the Golden Frieza transformation, he is defeated
              by Goku and Vegeta, who have mastered the Super Saiyan Blue
              transformation. In spite, Frieza destroys the Earth, but Whis
              reverses time, allowing Goku to slay Frieza.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[calc(60rem)] bg-transparent/5 backdrop-blur-xl rounded-2xl border border-white border-opacity-20">
        <div class="card card-side bg-base-100 shadow-xl bg-white/20">
          <figure>
            <img
              src="https://nitter.net/pic/media%2FFNbXmK6VEAENfPz.jpg"
              alt="Movie"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Bleach</h2>
            <p className="w-[calc(30rem)] text-justify">
              Ichigo Kurosaki is a teenager from Karakura Town who can see
              ghosts, a talent which lets him meet supernatural trespasser Rukia
              Kuchiki who enters Ichigo's room in search of a Hollow, a kind of
              monstrous lost soul who can harm both ghosts and humans. Rukia is
              one of the Soul Reapers soldiers trusted with ushering the souls
              of the dead from the World of the Living to the Soul Society the
              afterlife realm from which she originates—and with fighting
              Hollows. When she is severely wounded defending Ichigo from a
              Hollow she is pursuing, Rukia transfers her powers to Ichigo so
              that he may fight in her stead while she recovers her strength.
              Rukia is thereby trapped in an ordinary human body, and must
              advise Ichigo as he balances the demands of his substitute Soul
              Reaper duties and attending high school. For aid in hunting the
              Hollows, the pair ally with a trio of other spiritually empowered
              teenagers: Ichigo's high school classmate Orihime Inoue, best
              friend Yasutora "Chad" Sado and the Quincy—humans who have the
              ability to control spirit particles—Uryū Ishida. Eventually, Rukia
              is arrested by her Soul Reaper superiors and sentenced to death
              for the illegal act of transferring her powers into a human.
              Ichigo and friends enlist the help of ex-Soul Reaper scientist
              Kisuke Urahara, who also enables Ichigo to access his own Soul
              Reaper powers, to enter Soul Society and rescue Rukia.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[calc(60rem)] bg-transparent/5 backdrop-blur-xl rounded-2xl border border-white border-opacity-20">
        <div class="card card-side bg-base-100 shadow-xl bg-white/20">
          <figure>
            <img
              src="https://somoskudasai.com/wp-content/uploads/2020/09/EjAdNAAWsAE93ps-1.jpg"
              alt="Movie"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Black Clover</h2>
            <p className="w-[calc(30rem)] text-justify">
              The series focuses on Asta, a young orphan who is left to be
              raised in an orphanage alongside his fellow orphan, Yuno. While
              everyone is born with the ability to utilize mana in the form of
              magical power, Asta, with no magic however, instead focuses on
              physical strength. Motivated by a desire to become the next Wizard
              King, an authority figure second to the king of Clover Kingdom,
              the two youths developed a friendly rivalry. Yuno obtains a
              legendary four-leaf grimoire held by the kingdom's first Wizard
              King. The four-leaf grimoire is a rare grimoire, only given to the
              most immense mages. Asta, despite his lack of magic, obtained a
              mysterious five-leaf grimoire that contains mysterious elf swords
              and a bodiless member of the Devil race who utilizes rare
              anti-magic. Afterward, he and Yuno each join a Magic Knight squad
              as the first step to fulfill their ambitions. Asta joins the Black
              Bulls under Yami Sukehiro alongside Noelle Silva while Yuno
              becomes a member of the Golden Dawn. They embark on various
              adventures while contending with an extremist group called the Eye
              of the Midnight Sun, whose leadership is manipulated by a Devil in
              avenging an injustice committed against the Elves by the Clover
              Kingdom at the time of its founding. The Magic Knights then face
              the Dark Triad of the Spade Kingdom, with Asta and Yuno learning
              of their Devils' influence on their lives and of the Dark Triad's
              plan to fully manifest the Devils into their world.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[calc(60rem)] bg-transparent/5 backdrop-blur-xl rounded-2xl border border-white border-opacity-20">
        <div class="card card-side bg-base-100 shadow-xl bg-white/20">
          <figure>
            <img
              src="https://i.pinimg.com/originals/e9/76/a2/e976a29e0ffaefd0c16bc2be934cd9dd.jpg"
              alt="Movie"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">My Hero Academia</h2>
            <p className="w-[calc(30rem)] text-justify">
              The story of My Hero Academia is set in a world where currently
              most of the human population has gained the ability to develop
              superpowers called "Quirks", which occur in children within the
              age of four: it is estimated that around 80% of the world
              population has a Quirk. Among the Quirk-enhanced individuals, a
              few of them earn the title of Heroes, who cooperate with the
              authorities in rescue operations and apprehending criminals who
              abuse their powers, commonly known as Villains. In addition,
              Heroes who excel on their duties gain celebrity status and are
              recognized as "Pro Heroes". The series focuses on Izuku Midoriya,
              a young man who dreams of becoming a Hero despite being bullied by
              his violent childhood friend Katsuki Bakugo for lacking a Quirk.
              Both youths idolize one of the world's greatest heroes All Might,
              who they both met with Izuku being one of few to know of a
              critical injury All Might has been concealing from the public eye
              to maintain morale. All Might also reveals the nature of his Quirk
              "One For All" and passes it down to Izuku to succeed him after
              seeing the youth's determination in the face of danger. As Izuku
              begins his path to becoming a hero in attending U.A. High School
              alongside Bakugo and the friends they make in Class 1-A, a nemesis
              to the "One For All" users named All For One conditions his
              apprentice Tomura Shigaraki to destroy the current society and its
              heroes.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[calc(60rem)] bg-transparent/5 backdrop-blur-xl rounded-2xl border border-white border-opacity-20">
        <div class="card card-side bg-base-100 shadow-xl bg-white/20">
          <figure>
            <img
              src="https://i.pinimg.com/originals/05/f8/d0/05f8d001429d7478691588ce55b4589a.jpg"
              alt="Movie"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Naruto</h2>
            <p className="w-[calc(30rem)] text-justify">
              A powerful fox known as the Nine-Tails attacks Konoha, the hidden
              leaf village in the Land of Fire, one of the Five Great Shinobi
              Countries in the Ninja World. In response, the leader of Konoha
              and the Fourth Hokage, Minato Namikaze seals the fox inside the
              body of his newborn son, Naruto Uzumaki, making Naruto a host of
              the beast; this costs Naruto's father his life, and the Third
              Hokage returns from retirement to become the leader of Konoha
              again. Naruto is often scorned by Konoha's villagers for being the
              host of the Nine-Tails. Due to a decree by the Third Hokage
              forbidding any mention of these events, Naruto learns nothing
              about the Nine-Tails until 12 years later, when Mizuki, a renegade
              ninja, reveals the truth to Naruto. Naruto then defeats Mizuki in
              combat, earning the respect of his teacher, Iruka Umino. Shortly
              afterward, Naruto becomes a ninja and joins with Sasuke Uchiha,
              against whom he often competes, and Sakura Haruno, on whom he has
              a crush, to form Team 7, under an experienced sensei, the elite
              ninja Kakashi Hatake. Like all the ninja teams from every village,
              Team 7 completes missions requested by the villagers, ranging from
              doing chores and being bodyguards to performing assassinations.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[calc(60rem)] bg-transparent/5 backdrop-blur-xl rounded-2xl border border-white border-opacity-20">
        <div class="card card-side bg-base-100 shadow-xl bg-white/20">
          <figure>
            <img
              src="https://d2qbtfwqvouhxg.cloudfront.net/syu/syu82774_0.jpg?v=73e3fd3f6f0a28a7f5ad637a830560e3"
              alt="Movie"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Boruto</h2>
            <p className="w-[calc(30rem)] text-justify">
              Opening with a teenaged Boruto Uzumaki facing a foe named Kawaki
              during the destruction of his village, the manga follows with a
              retelling of events in Boruto: Naruto the Movie with added
              content. The son of the Seventh Hokage Naruto Uzumaki, Boruto
              feels angry over his father placing the village before his family.
              At that time, Boruto becomes a member of a ninja team led by
              Naruto's protégé Konohamaru Sarutobi, alongside Sarada Uchiha, the
              daughter of Sasuke and Sakura Uchiha, and Mitsuki, Orochimaru's
              artificial son. Sasuke returns to the village to warn Naruto of an
              impending threat relating to deduce the motivations of Kaguya
              Ōtsutsuki. Boruto asks Sasuke to train him for the upcoming Chunin
              exam to impress his father. During the exam, Momoshiki and
              Kinshiki Ōtsutsuki, the duo whom Sasuke met, abduct Naruto so they
              can use Kurama, a tailed beast sealed inside his body, to
              revitalize the dying Divine Tree from the dimension they came
              from. Boruto, Sasuke and the four Kages, the leaders of other
              ninja villages, set out to rescue Naruto. The battle ends when
              Momoshiki, sacrificing Kinshiki to increase his own strength, is
              defeated by Boruto and Naruto with Sasuke's help; Momoshiki
              survives long enough to realize Boruto's full potential while
              warning him of future tribulations. After recovering from his
              fight, Boruto decides to become like Sasuke in the future, while
              entrusting Sarada to follow her dream of becoming the next Hokage.
            </p>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
