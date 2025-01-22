const scriptContent = `
<div class="scene">
    <p class="scene-heading">Winter Wonderland Adventure</p>
    
    <p class="character">Narrator 1:</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 1}'>On a cold winter morning, four children decided to explore the snowy forest.</p>
    
    <p class="character">Narrator 2:</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 2}'>They had heard tales of a magical winter wonderland.</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 3}'>It was a place where animals talked and snowflakes danced in the air.</p>
    
    <p class="character">Child 1:</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 4}'>Look at all the snow!</p>
    
    <p class="character">Child 2:</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 5}'>Let's build a snowman together!</p>
    
    <p class="character">Child 3:</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 6}'>And maybe we will meet some winter animals!</p>
    
    <p class="character">Child 4:</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 7}'>I wonder if there is magic in this forest.</p>
    
    <p class="character">Child 5:</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 8}'>Let's find out!</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 9}'>I can't wait to explore!</p>
    
    <p class="character">Snowman:</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 10}'>Hello, children!</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 11}'>I'm Mr. Snowman.</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 12}'>Welcome to our winter wonderland!</p>
    
    <p class="character">Child 1:</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 13}'>Wow, you can talk!</p>
    
    <p class="character">Snowman:</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 14}'>Yes!</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 15}'>And I'm not the only one.</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 16}'>Look, here comes my friend, Penguin!</p>
    
    <p class="character">Penguin:</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 17}'>Hello!</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 18}'>Welcome to the snow!</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 19}'>It's so much fun to slide on the ice.</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 20}'>Want to try?</p>
    
    <p class="character">Child 2:</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 21}'>This is so much fun!</p>
    
    <p class="character">Child 3:</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 22}'>Who else lives here?</p>
    
    <p class="character">Snowman:</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 23}'>Meet Polar Bear!</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 24}'>But shhh, he's a little sleepy.</p>
    
    <p class="character">Polar Bear:</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 25}'>Hello, everyone.</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 26}'>I'm a bit tired, but I love winter too.</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 27}'>I take long naps during the day.</p>
    
    <p class="character">Child 4:</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 28}'>You look so cozy!</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 29}'>I wish I could hibernate like you.</p>
    
    <p class="character">Polar Bear:</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 30}'>Maybe you can, but first, let's meet Reindeer.</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 31}'>He loves to run and play!</p>
    
    <p class="character">Reindeer:</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 32}'>Hello, hello!</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 33}'>I'm Reindeer, and I can run really fast!</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 34}'>Do you want to race?</p>
    
    <p class="character">Child 5:</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 35}'>This is the best day ever!</p>
    
    <p class="character">Child 1:</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 36}'>But wait, what's that sparkling in the trees?</p>
    
    <p class="character">Snowflake Fairies:</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 37}'>We are the Snowflake Fairies.</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 38}'>We bring the magic of winter to life!</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 39}'>We sprinkle snow to make everything beautiful.</p>
    
    <p class="character">Child 2:</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 40}'>Wow, you're so magical!</p>
    
    <p class="character">Snowflake Fairies:</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 41}'>Thank you!</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 42}'>Let's dance in the snow together!</p>
    
    <p class="character">Narrator 1:</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 43}'>And so, the children made new friends.</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 44}'>They had a magical adventure in the winter wonderland.</p>
    
    <p class="character">Narrator 2:</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 45}'>They played until the sun began to set.</p>
    <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 46}'>And they promised to return again one day.</p>
</div>
`;