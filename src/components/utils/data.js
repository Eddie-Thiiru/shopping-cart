import { useState, useEffect } from "react";

const additionalData = {
  22511: {
    price: 59.99,
    stroy:
      "No kingdom. No memories. After a 100-year slumber, Link wakes up alone in a world he no longer remembers. Now the legendary hero must explore a vast and dangerous land and regain his memories before Hyrule is lost forever. Armed only with what he can scavenge, Link sets out to find answers and the resources needed to survive.",
  },
  28: {
    price: 59.99,
    story:
      "America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.",
  },
  3328: {
    price: 49.99,
    story:
      "In a war-torn world, with the Wild Hunt on your back, you'll take on your most important contract -- to track down the child of prophecy, a key and a weapon which can save or destroy all.",
  },
  3498: {
    price: 29.99,
    story:
      "When a young street hustler, a retired bank robber, and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government, and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody — least of all each other.",
  },
  58175: {
    price: 49.99,
    story:
      "Join Kratos and Atreus on a mythic journey for answers before Ragnarök arrives. Together, father and son must put everything on the line as they journey to each of the Nine Realms. Throughout stunning mythological landscapes, they,ll face fearsome enemies - from Norse gods to wild beasts - as they prepare for the showdown of their lives.",
  },
  3192: {
    price: 29.99,
    story:
      "The Soviet invasion of Afghanistan has brought a new edge to the Cold War, and in 1984, a one-eyed man with a prosthetic arm appears in the country. Those who know him call him Snake; the legendary mercenary who was once swept from the stage of history and left in a coma by American private intelligence network Cipher. Now, Snake's former partner Kazuhira Miller is being held by the Soviet forces in Afghanistan. Snake must undertake a solo mission to rescue Miller and prove to the world that the legendary mercenary is not dead and gone.",
  },
  3636: {
    price: 69.99,
    story:
      "In a ravaged civilization, where infected and hardened survivors run rampant, Joel, a weary protagonist, is hired to smuggle 14-year-old Ellie out of a military quarantine zone. However, what starts as a small job soon transforms into a brutal cross-country journey.",
  },
  2462: {
    price: 10.0,
    story:
      "Set three years after the events of UNCHARTED 3: Drake,s Deception, Nathan Drake has presumably left the world of fortune-hunting behind. However, it doesn't take long for fate to come calling when Drake's brother, Sam, resurfaces seeking his help to save his own life and offering an adventure Drake can't resist. ",
  },
  4200: {
    price: 9.99,
    story:
      "Using a highly experimental portal device, you'll once again face off against a lethally inventive, power-mad A.I. named GLaDOS. Break the laws of spatial physics in ways you never thought possible as you to use wits over weaponry in a funhouse of diabolical science.",
  },
  58550: {
    price: 69.99,
    story:
      "Forge a new path and wage an unconventional war for the freedom of Tsushima. Challenge opponents with your katana, master the bow to eliminate distant threats, develop stealth tactics to ambush enemies and explore a new story on Iki Island.",
  },
  622492: {
    price: 59.99,
    story:
      "Lead breathtaking expeditions across the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world's greatest cars.",
  },
  9767: {
    price: 29.99,
    story:
      "Beneath the fading town of Dirtmouth sleeps a vast, ancient kingdom. Many are drawn beneath the surface, searching for riches, or glory, or answers to old secrets. As the enigmatic Knight, you'll traverse the depths, unravel its mysteries and conquer its evils.",
  },
  28199: {
    price: 29.99,
    story:
      "The little spirit Ori is no stranger to peril, but when a fateful flight puts the owlet Ku in harm's way, it will take more than bravery to bring a family back together, heal a broken land, and discover Ori's true destiny. Embark on an all-new adventure in a vast world filled with new friends and foes that come to life in stunning, hand-painted artwork.",
  },
  326243: {
    price: 59.99,
    story:
      "In the Lands Between ruled by Queen Marika the Eternal, the Elden Ring, the source of the Erdtree, has been shattered. Marika's offspring, demigods all, claimed the shards of the Elden Ring known as the Great Runes, and the mad taint of their newfound strength triggered a war: The Shattering. A war that meant abandonment by the Greater Will. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become the Elden Lord.",
  },
  7689: {
    price: 29.99,
    story:
      "In a hunt for the lost secrets of immortality, Lara Croft uncovers an ancient mystery that offers a glimmer of hope, the trail leads to a myth about the Lost City of Kitezh and also places her in the cross-hairs of a ruthless organization known as Trinity. Lara will have to conquer a world fiercely protecting its secrets, explore tombs filled with traps and puzzles, and craft survival gear to confront a deadly new enemy as she embarks upon her first tomb raiding expedition.",
  },
  28623: {
    price: 19.99,
    story:
      "Arkham City builds upon the intense, atmospheric foundation of Batman: Arkham Asylum, sending players flying through the expansive Arkham City - five times larger than the game world in Batman: Arkham Asylum - the new maximum security 'home' for all of Gotham City's thugs, gangsters and insane criminal masterminds.",
  },
  56184: {
    price: 59.99,
    story:
      "6 years have passed since the biological disaster in Raccoon City. Leon S. Kennedy, one of the survivors of the incident, has been recruited as an agent reporting directly to the president of the United States. With the experience of multiple missions on his back, Leon is sent to rescue the president's kidnapped daughter. He tracks her to a secluded European village, where there is something terribly wrong with the villagers. And the curtain rises on this story of daring rescue and grueling horror.  ",
  },
  10297: {
    price: 59.99,
    story:
      "Civilization is a turn-based strategy game in which you attempt to build an empire to stand the test of time. Become Ruler of the World by establishing and leading a civilization from the Stone Age to the Information Age. Wage war, conduct diplomacy, advance your culture, and go head-to-head with history’s greatest leaders as you attempt to build the greatest civilization the world has ever known.",
  },
  364806: {
    price: 69.99,
    story:
      "In Need for Speed Heat, the lines of the law fade when the sun starts to set. By daylight, compete in the Speedhunter Showdown, a series of sanctioned events where you can earn Bank to customize your personal fleet of cars. When your ride's styled just right, ramp up the intensity at night. Enter illicit street races with your die-hard crew but stay ready - rogue cops are waiting. Take chances, burn competitors to increase your Rep, and risk it all for underground glory.  ",
  },
  416: {
    price: 10,
    story:
      "Five years ago Carl Johnson escaped from the pressures of life in Los Santos, San Andreas — a city tearing itself apart with gang trouble, drugs, and corruption. Where film stars and millionaires do their best to avoid the dealers and gangbangers. Now, it's the early '90s. Carl's got to go home. His mother has been murdered, his family has fallen apart and his childhood friends are all heading toward disaster. On his return to the neighborhood, a couple of corrupt cops frame him for homicide. CJ is forced on a journey that takes him across the entire state of San Andreas, to save his family and to take control of the streets.",
  },
};

const useData = (id) => {
  const [data, setData] = useState({
    imageURL: "",
    name: "",
    uniqueId: "",
    metaScore: "",
    platforms: [],
    genre: [],
    released: "",
    price: "",
    story: "",
    about: "",
    slug: "",
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games/${id}?key=ded6236dee784a49946f45a75db16ec8`,
      { mode: "cors" },
    )
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }

        return response.json();
      })
      .then((response) => {
        const gameId = `${id}`;
        const gamePrice = additionalData[gameId].price;
        const gameStory = additionalData[gameId].story;

        setData({
          imageURL: response.background_image,
          name: response.name,
          uniqueId: response.id,
          metaScore: response.metacritic,
          platforms: response.platforms,
          genre: response.genres,
          released: response.released,
          price: gamePrice,
          story: gameStory,
          slug: response.slug,
        });
      })
      .catch(() => {
        setError(true);
      });
  }, [id]);

  return { data, error };
};

export default useData;
