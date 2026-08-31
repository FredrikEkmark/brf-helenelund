import Card from './Card';

export default function OrdningsreglerLokalen() {
  return (
    <Card>
      <ol>
        <li>
          En deposition om 1000 kr erlägges vid bokning av lokalen.
          Deposition återfås vid avbokning senast 10 dagar innan det bokade
          datumet.
        </li>
        <li>Ansvarig person skall finnas på plats när verksamhet pågår.</li>
        <li>
          Inventarier skall hanteras varsamt och efter användandet
          återställas på anvisad plats (som regel där de stod vid
          uthyrningens början).
        </li>
        <li>
          Förbrukningsartiklar som finns i lokalen får ej användas av
          hyresgäst utan överenskommelse med lokalansvarig.
        </li>
        <li>
          Rökning är absolut förbjudet i lokalerna. Rökning sker utomhus vid
          de askkoppar som finns utplacerade vid källaringångarna eller vid
          tvättstugan.
        </li>
        <li>Kl 23.00 ska musikvolymen dämpas så att kringboende inte störs.</li>
        <li>
          Det är inte tillåtet att laga mat i lokalens kök. Köket får endast
          användas för uppvärmning av mat.
        </li>
        <li>
          Skador på anläggningen eller inventarier skall omgående anmälas
          till styrelsen. Hyrestagaren kan bli ansvarig för uppkommen skada.
        </li>
        <li>
          Styrelsen ansvarar inte för värdesaker och andra tillhörigheter som
          under förhyrd tid förvaras i lokalen.
        </li>
        <li>
          Hyrestagaren skall tillse att under förhyrd tid behöriga dörrar är
          låsta för att förhindra obehöriga tillträde till lokalerna.
        </li>
        <li>Bokningen får ej överlåtas till någon annan.</li>
        <li>
          Hyrestagaren skall själv tillse följande då anläggningen lämnas:
          <ul>
            <li>Att inventarier står på rätt plats.</li>
            <li>
              Att anläggningen och toaletterna är städade och klara senast kl
              12.00 dagen efter.
            </li>
            <li>
              Städning innebär att:
              <ul>
                <li>Använd köksutrustning rengörs.</li>
                <li>Golven sopas alt. dammsugs och våttorkas.</li>
                <li>Toalettrum städas.</li>
                <li>Bord och bänkar torkas.</li>
                <li>Sopor kastas i soprummet.</li>
              </ul>
            </li>
            <li>Depositionen återfås ej vid bristfällig städning.</li>
          </ul>
        </li>
        <li>
          Hyrestagaren skall tillse att de anvisningar som anslås i lokalen
          efterlevs.
        </li>
        <li>
          Hyrestagare som inte följer dessa regler och anvisningar kan nekas
          framtida uthyrning.
        </li>
        <li>
          Hyrestagare skall visa legitimation när denne kvitterar ut nyckel.
        </li>
        <li>
          Nyckel skall återlämnas dagen efter bokat datum om inget annat är
          överenskommet.
        </li>
        <li>
          Låsbyte kan komma att debiteras hyrestagaren vid ej återlämnad
          nyckel om sådan lämnats ut.
        </li>
      </ol>
    </Card>
  );
}
