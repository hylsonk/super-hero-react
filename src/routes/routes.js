import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Table } from '../components/organisms';
import { columnsChracter } from '../utils/constants';
import api from '../services/api';
import { InputSearch } from '../components/molecules';

export default function App() {

    const mock = [
        {
          "id": "1",
          "name": "A-Bomb",
          "powerstats": {
            "intelligence": "38",
            "strength": "100",
            "speed": "17",
            "durability": "80",
            "power": "24",
            "combat": "64"
          },
          "biography": {
            "full-name": "Richard Milhouse Jones",
            "alter-egos": "No alter egos found.",
            "aliases": [
              "Rick Jones"
            ],
            "place-of-birth": "Scarsdale, Arizona",
            "first-appearance": "Hulk Vol 2 #2 (April, 2008) (as A-Bomb)",
            "publisher": "Marvel Comics",
            "alignment": "good"
          },
          "appearance": {
            "gender": "Male",
            "race": "Human",
            "height": [
              "6'8",
              "203 cm"
            ],
            "weight": [
              "980 lb",
              "441 kg"
            ],
            "eye-color": "Yellow",
            "hair-color": "No Hair"
          },
          "work": {
            "occupation": "Musician, adventurer, author; formerly talk show host",
            "base": "-"
          },
          "connections": {
            "group-affiliation": "Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom",
            "relatives": "Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)"
          },
          "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg"
          }
        },
        {
          "id": "2",
          "name": "Abe Sapien",
          "powerstats": {
            "intelligence": "88",
            "strength": "28",
            "speed": "35",
            "durability": "65",
            "power": "100",
            "combat": "85"
          },
          "biography": {
            "full-name": "Abraham Sapien",
            "alter-egos": "No alter egos found.",
            "aliases": [
              "Langdon Everett Caul",
              "Abraham Sapien",
              "Langdon Caul"
            ],
            "place-of-birth": "-",
            "first-appearance": "Hellboy: Seed of Destruction (1993)",
            "publisher": "Dark Horse Comics",
            "alignment": "good"
          },
          "appearance": {
            "gender": "Male",
            "race": "Icthyo Sapien",
            "height": [
              "6'3",
              "191 cm"
            ],
            "weight": [
              "145 lb",
              "65 kg"
            ],
            "eye-color": "Blue",
            "hair-color": "No Hair"
          },
          "work": {
            "occupation": "Paranormal Investigator",
            "base": "-"
          },
          "connections": {
            "group-affiliation": "Bureau for Paranormal Research and Defense",
            "relatives": "Edith Howard (wife, deceased)"
          },
          "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/956.jpg"
          }
        },
        {
          "id": "3",
          "name": "Abin Sur",
          "powerstats": {
            "intelligence": "50",
            "strength": "90",
            "speed": "53",
            "durability": "64",
            "power": "99",
            "combat": "65"
          },
          "biography": {
            "full-name": "",
            "alter-egos": "No alter egos found.",
            "aliases": [
              "Lagzia"
            ],
            "place-of-birth": "Ungara",
            "first-appearance": "Showcase #22 (October, 1959)",
            "publisher": "DC Comics",
            "alignment": "good"
          },
          "appearance": {
            "gender": "Male",
            "race": "Ungaran",
            "height": [
              "6'1",
              "185 cm"
            ],
            "weight": [
              "200 lb",
              "90 kg"
            ],
            "eye-color": "Blue",
            "hair-color": "No Hair"
          },
          "work": {
            "occupation": "Green Lantern, former history professor",
            "base": "Oa"
          },
          "connections": {
            "group-affiliation": "Green Lantern Corps, Black Lantern Corps",
            "relatives": "Amon Sur (son), Arin Sur (sister), Thaal Sinestro (brother-in-law), Soranik Natu (niece)"
          },
          "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/1460.jpg"
          }
        }
    ]
    
    load()
    

    return (
        <Router>
            <InputSearch/>
            <Table 
                head={columnsChracter}
                body={
                    mock.map(char=>([char.id, char.name]))
                }
            />
        </Router>
    )
}

export const load = () =>{
    api.get('70')
        .then((response) => console.log(response))
        .catch((err) => {
            console.error(err);
        });
}

