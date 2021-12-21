const $name = $(`#name`);
const $gender = $(`#gender`);
const $race = $(`#race`);
const $image = $(`#image`);
const $weight = $(`#weight`);
const $height = $(`#height`);
const $aliases = $(`#aliases`);
const $alignment = $(`#alignment`);
const $publisher = $(`#publisher`);
const $occupation = $(`#occupation`);
const $combat = $(`#combat`);
const $durability = $(`#durability`);
const $intelligence = $(`#intelligence`);
const $power = $(`#power`);
const $speed = $(`#speed`);
const $strength = $(`#strength`);
const $input = $('input[type="text"]');


let superHero;


function handleGetData(event){
    event.preventDefault();

    $.ajax({
        url: `https://www.superheroapi.com/api/10157992628413204/search/${$input.val()}`,
    }).then(
      function(data){
       console.log(data);
       superHero = data;
       render($input.val(""));
    

      },
      function(error){
       console.log('not sure', error);
      }
    );
}



function render(){
    $image.attr("src",superHero.image.url)
    $name.text(superHero.name);
    $gender.text(superHero.appearance.gender);
    $race.text(superHero.appearance.race);
    $weight.text(superHero.appearance.weight[0]);
    $height.text(superHero.appearance.height[0]);
    $aliases.text(superHero.biography.aliases);
    $alignment.text(superHero.biography.alignment);
    $publisher.text(superHero.biography.publisher);
    $occupation.text(superHero.work.occupation);
    $combat.text(superHero.powerstats.combat);
    $durability.text(superHero.powerstats.durability);
    $intelligence.text(superHero.powerstats.intelligence);
    $power.text(superHero.powerstats.power);
    $speed.text(superHero.powerstats.speed);
    $strength.text(superHero.powerstats.strength);

}

$("form").on("submit", handleGetData)
