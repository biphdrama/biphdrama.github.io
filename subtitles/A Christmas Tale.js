const scriptContent = `
    <div class="scene">
        <p class="scene-heading">A Christmas Tale</p>
        
        <p class="character">Narrator 1 (Arya):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 1}'>It was a chilly December evening at the North Pole.</p>
        
        <p class="character">Narrator 2 (Neil):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 2}'>Santa Claus and Mrs. Claus were busy preparing for Christmas.</p>
        
        <p class="character">Santa Claus (Harvey):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 3}'>(checking his list) Ho, ho, ho! The big night is almost here! Are we ready, Mrs. Claus?</p>
        
        <p class="character">Mrs. Claus (Jennifer):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 4}'>(smiling) Yes, Santa! The elves have been working hard, and the reindeer are ready for the journey.</p>
        
        <p class="character">Narrator 1 (Arya):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 5}'>The elves were busy making toys, wrapping gifts, and getting everything ready for Christmas Eve.</p>
        
        <p class="character">Elf 1 (Harry):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 6}'>(wrapping a present) I hope the children love these gifts!</p>
        
        <p class="character">Elf 2 (Icey):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 7}'>(holding a stuffed animal) Me too! I love making toys for them.</p>
        
        <p class="character">Elf 3 (Zoey):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 8}'>(carrying a big box) This one's going to be the best gift ever!</p>
        
        <p class="character">Elf (Charlie):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 9}'>I have prepared all the elf food for our long journey.</p>
        
        <p class="character">Elf (Noah):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 10}'>Let's go pack Santa's sleigh and get ready for the big day.</p>
        
        <p class="character">Narrator 2 (Neil):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 11}'>Outside, the reindeer were excited, too.</p>
        
        <p class="character">Reindeer 1 (Eachen):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 12}'>(prancing around) I can't wait to fly around the world!</p>

        <p class="character">Reindeer 2 (Joey):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 13}'>(stretching) Let's make sure we're ready to guide Santa's sleigh!</p>
        
        <p class="character">Reindeer 3 (James):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 14}'>(fixing antlers) I'm so excited! I hope there's lots of snow!</p>
        
        <p class="character">Reindeer (Cathy):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 15}'>I have prepared all our reindeer food for our journey.</p>
        
        <p class="character">Reindeer (Frankie):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 16}'>And I have the map!</p>
        
        <p class="character">Reindeer (Christina):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 17}'>Let's go practice jumping over the clouds!</p>
        
        <p class="character">Narrator 1 (Arya):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 18}'>Meanwhile, in a nearby town, children were also preparing for Christmas.</p>
        
        <p class="character">Narrator 2 (Neil):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 19}'>They were decorating their homes, singing carols, and thinking about what gifts they might receive.</p>
        
        <p class="character">Child 1 (Apollo):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 20}'>(hanging a stocking) I wonder what Santa will bring me this year.</p>
        
        <p class="character">Child 2 (Hubert):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 21}'>(singing) Jingle bells, jingle bells, jingle all the way!</p>
        
        <p class="character">Narrator 1 (Arya):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 22}'>But one child, named Sarah, was thinking about something different.</p>
        
        <p class="character">Sarah (Sofia):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 23}'>(thinking) Christmas isn't just about getting presents. It's about giving and being kind to others.</p>
        
        <p class="character">Child 4 (Jeffrey):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 24}'>(curious) What do you mean, Sarah?</p>
        
        <p class="character">Sarah (Sofia):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 25}'>I think we should do something nice for someone else this Christmas.</p>
        
        <p class="character">Child 1 (Apollo):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 26}'>That's a great idea! What should we do?</p>
        
        <p class="character">Narrator 2 (Neil):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 27}'>Just then, the sound of carolers filled the air.</p>

        <p class="character">Caroler 1 (Doris):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 28}'>(singing) Sleigh bells ring, are you listening?</p>

        <p class="character">Caroler 2 (KayEe):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 29}'>(singing) In the lane, snow is glistening…</p>

        <p class="character">Caroler 3 (Demir):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 30}'>(joining in) A beautiful sight, we're happy tonight…</p>

        <p class="character">All Carolers:</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 31}'>Walking in a winter wonderland.</p>

        <p class="character">Caroler 4 (Seven and Shirley):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 32}'>In the meadow we can build a snowman.</p>

        <p class="character">All Carolers:</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 33}'>And pretend that he is Mr. Quirk.</p>

        <p class="character">Narrator 1 (Arya):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 34}'>The children listened to the carolers and felt the warmth of the holiday spirit.</p>

        <p class="character">Narrator 2 (Neil):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 35}'>They decided to make a special gift for a lonely snowman who lived outside the town.</p>

        <p class="character">Child 2 (Hubert):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 36}'>(gathering materials) Let's make him a warm scarf and a hat!</p>

        <p class="character">Child 4 (Jeffrey):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 37}'>(nodding) And let's sing him a song to cheer him up!</p>

        <p class="character">Narrator 1 (Arya):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 38}'>The children worked together, and soon they had a beautiful scarf and hat.</p>

        <p class="character">Narrator 2 (Neil):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 39}'>They walked through the snow to find the snowman.</p>

        <p class="character">Snowman (Baron):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 40}'>(looking sad) Oh, it's so cold, and I'm all alone.</p>

        <p class="character">Sarah (Sofia):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 41}'>(smiling) Don't be sad, Mr. Snowman! We brought you a gift!</p>

        <p class="character">Child 2 (Hubert):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 39}'> (wrapping the scarf around the Snowman) Here’s a warm scarf to keep you cozy.</p>

        <p class="character">Child 4 (Jeffrey):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 40}'> (placing the hat on the Snowman’s head) And a hat to keep you warm!</p>

        <p class="character">Narrator 1 (Arya):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 41}'>The Snowman’s face lit up with joy.</p>

        <p class="character">Snowman (Baron):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 42}'> (smiling) Thank you so much, children! You’ve made me so happy!</p>

        <p class="character">Narrator 2 (Neil):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 43}'>The children gathered around the Snowman and started singing a holiday song.</p>

        <p class="character">All Children:</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 44}'>(singing) We wish you a Merry Christmas, we wish you a Merry Christmas, we wish you a Merry Christmas, and a Happy New Year!</p>

        <p class="character">Narrator 1 (Arya):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 45}'>The Snowman felt the warmth of their kindness, and the children felt the joy of giving.</p>

        <p class="character">Narrator 2 (Neil):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 46}'>That Christmas, they learned that the best gifts are the ones you give from the heart.</p>

        <p class="character">Santa Claus (Harvey):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 47}'> (appearing with a big smile) Ho, ho, ho! You children have made this Christmas very special!</p>

        <p class="character">Mrs. Claus (Jennifer):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 48}'> (smiling) You’ve shown the true meaning of the holiday season.</p>

        <p class="character">Narrator 1 (Arya):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 49}'>Santa and Mrs. Claus, the elves, the reindeer, the Snowman, and the children all celebrated together.</p>

        <p class="character">Narrator 2 (Neil):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 50}'>Celebrating that the gift of kindness is the greatest gift of all.</p>

        <p class="character">All:</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 51}'>(together) Happy Holidays!</p>

        <p class="character">Elf 1 (Harry):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 52}'>Hey wait!</p>

        <p class="character">Elf 2 (Icey):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 53}'>Let’s not end this show just yet.</p>

        <p class="character">Elf 3 (Harry):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 54}'>Santa, can we sing our favorite song?</p>

        <p class="character">Santa Claus (Harvey):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 55}'>I think that’s a splendid idea!</p>

        <p class="character">All Reindeer:</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 56}'>Yay!</p>

        <p class="character">Reindeer 2 (Joey):</p>
        <p class="dialogue" data-midi='{"channel": 1, "note": 1, "velocity": 57}'>If you can see us out there, stand up and dance along with us!</p>
        </div>
`;