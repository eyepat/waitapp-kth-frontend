import {
  Stack,
  ThemeProvider,
  Typography,
  List,
  ListItem,
} from '@mui/material';
import { useLanguage } from '../../../contexts/LanguageContext';
import theme from '../../../components/Theme';
//import { useNavigate } from 'react-router-dom';

export default function HealthyFood() {
  const { t } = useLanguage();
  //const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Stack
        marginBottom="20%"
        alignItems="center"
        maxWidth="1000px"
        margin="auto"
        padding="0 8vw 0 8vw"
      >
        <Typography variant="h4" marginBottom="1rem" alignSelf="center">
          {t('healthy-food')}
        </Typography>

        <Stack
          direction="column"
          paddingTop="30px"
          paddingBottom="3rem"
          maxWidth="100%"
          spacing={1}
        >
          <img src="https://images.ctfassets.net/e8gvzq1fwq00/2vYcuGc6Qx1O4QD1ohbiBJ/1b6145db77047a31a346033e0d9c3df0/Mat_Del_3-.png" />
          <Typography variant="h5">Vad är ett hälsosamt matmönster?</Typography>
          <Typography>
            Pyramiden ovan visar vilka och hur mycket av olika livsmedel som
            ingår i ett hälsosamt matmönster. Det som finns i botten av
            pyramiden kan du äta mer av. Där finns grönsaker, baljväxter (ärter,
            bönor, linser), rotfrukter, lök, färska kryddor, frukt, bär, nötter,
            mandel, frön, grovt bröd och andra fiberrika spannmål samt pasta och
            ris. Basfettet är vegetabiliska oljor.
          </Typography>
          <Typography>
            Mitten på pyramiden utgörs av fisk, skaldjur eller musslor och
            pyramidens mindre fält ovanför mitten visar måttliga mängder
            kyckling och mejeriprodukter. I toppen av pyramiden finns rött kött
            och charkuterier som vi bör äta mer sällan. Vatten är en bra
            måltidsdryck.
          </Typography>
          <Typography variant="h5">Matvanor får många effekter</Typography>
          <Typography>
            Effekterna man kan se av förändrade matvanor förklaras av att ett
            hälsosamt matmönster inte bara har en positiv effekt utan många.
            Tillsammans kan de skapa flera effekter som ibland dessutom
            förstärker varandra.
          </Typography>
          <Typography variant="h5">
            Att äta regelbundet är en god vana
          </Typography>
          <Typography>
            Att äta på regelbundna tider med frukost, lunch, middag och 0-3
            planerade mellanmål ger jämn energi för hela dagen. Suget efter att
            småäta brukar minska och portionerna bli mer måttfulla. Att äta
            regelbundet ökar också dina chanser att du får i dig all näring du
            behöver.
          </Typography>
          <Typography variant="h5">
            En liten förändring kan ha stor effekt
          </Typography>
          <Typography>
            Störst effekt får man om man ändrar på något av det som man äter
            varje dag, t ex att avstå från söta drycker eller byta fet ost mot
            mager.
          </Typography>
          <Typography>
            Mat och hälsa är ett trendkänsligt område, men modedieter är ofta
            dåligt vetenskapligt underbyggda även om de kan innehålla vissa
            fakta-baserade och bra delkomponenter.
          </Typography>
          <Typography>
            Hämta gärna information från hälso- och sjukvården, från
            Livsmedelsverket och från universitet och högskolor.
          </Typography>
          <Typography>
            På <a href="https://sundkurs.se/">Sundkurs.se</a> hittar du även
            tips och råd med vetenskaplig grund samt många inspirerande recept.
          </Typography>
          <Typography variant="h5">
            Bra tips om du vill förändra dina matvanor är t ex:
          </Typography>
          <Typography>
            <List sx={{ listStyleType: 'disc', pl: 4 }}>
              <ListItem sx={{ display: 'list-item' }}>
                Strunta i modedieter, lita på vetenskapen och sunt förnuft
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Ändra på något du äter varje dag
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                En liten förändring är lättare att hålla
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Små förändringar är bättre än inga
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Lägg till fysisk aktivitet utifrån din förmåga
              </ListItem>
            </List>
          </Typography>
          <Typography bgcolor="#00a3e050" padding="5px">
            Kom ihåg - Det är aldrig för sent att ändra sina matvanor!
          </Typography>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
