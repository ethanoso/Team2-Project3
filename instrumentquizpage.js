function handleSubmit (n1, n2, n3, n4, n5, n6) {

  value1 = getInstrument(n1, n2, n3, n4, n5, n6);


  sessionStorage.setItem("VALUE1", value1);


    return;
}

function getInstrument(n1, n2, n3, n4, n5, n6)
{
  num = parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4) + parseInt(n5) - parseInt(n6);

  if (num >= 0 && num <= 5)
  {
    num = "Saxophone";
  }
  if (num >= 6 && num <= 11)
  {
    num = "Piccolo";
  }
  if (num >= 12 && num <= 17)
  {
    num = "Flute";
  }
  if (num >= 18 && num <= 23)
  {
    num = "Clarinet";
  }
  if (num >= 24 && num <= 29)
  {
    num = "Drumline";
  }
  if (num >= 30 && num <= 35)
  {
    num = "Sousaphone";
  }
  if (num >= 36 && num <= 41)
  {
    num = "Mellophone";
  }
  if (num >= 42 && num <= 45)
  {
    num = "Baritone";
  }
  if (num >= 46 && num <= 48)
  {
    num = "Drum Major";
  }
  if (num >= 49 && num <= 53)
  {
    num = "Trumpet";
  }
  else if (num >= 54)
  {
    num = "Trombone";
  }

  return(num);
}
