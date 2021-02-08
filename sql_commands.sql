INSERT INTO lesson_content(sound, intro_text, illustration, example_audio_male, example_audio_female, quiz_words) 
VALUES ("ɹ", 
        "The English \“r\” sound, [ɹ] is made by curling your tongue towards the top of your mouth. You can create the curl with the tip or back of your tongue. The illustration below shows both ways to create the sound.
        In American English, the \“r\” sound can be expected most times that you see \“r\” in spelling.", 
        "images/r_illustration.jpg", 
        "audio/r/male.mp3", 
        "audio/r/female.mp3",
        "read,right,role,mirror,firing,sores,veer,tire,roar"),
        ("æ",
        "There are two sounds that you commonly find with the \“a\” spelling. In this lesson, we focus on the sound [æ] which can be found in the words, \“cat\”, \“bag\” and \“lab\”. [æ] is considered a lax, low, front vowel. 
        Lower your jaw and lay your tongue along the bottom of your mouth. Most speakers also pull their lips back a little to spread them open.
        In American English, you often see the [æ] sound when the letter \“a\” is followed by a single consonant at the end of a word like in “bat”, “cat”, and “slap,” or when you see the letter “a” 
        followed by two consonants like in “band”, “pack”, and “racket.”",
	"images/ash_illustration.jpg",
	"audio/ash/male.mp3",
        "audio/ash/female.mp3",
	"act,add,axe,back,sad,hat,packet,rapture,sadden"
        ),
        ("ɛ",
        "There are two sounds that you commonly find with the “e” spelling. 
        In this lesson, we focus on the sound [ɛ]which can be found in the words, “fed”, “bet” and “leg”. 
        [ɛ] is considered a lax, mid, front vowel. Although the front of your tongue should reach a little 
        towards the boney ridge (alveolar ridge) that is behind your upper teeth, 
        your tongue can be mostly relaxed lightly sitting along the bottom of your mouth.
        In American English, you often see the [ɛ] sound when the letter “e” is followed 
        by a single consonant at the end of a word like in “bet”, “red”, and “leg,” or 
        when you see the letter “e” followed by two consonants like in “edge”, “debt”, and “bend.” 
        Occasionally, you will also find [ɛ] with an “ea” spelling, like in “head,” “dead,” and “bread.”",
        "images/epsilon_illustration.jpg",
        "audio/epsilon/male.mp3",
        "audio/epsilon/female.mp3",
        "edge,etch,end,beg,red,set,leather,better,pedal"),
        ("ɪ",
          "There are two sounds that you commonly find with the “i” spelling. 
        In this lesson, we focus on the sound [ɪ] which can be found in the words, 
        “fit”, “lip” and “bid”. [ɪ] is considered a lax, high, front vowel. 
        The front of your tongue should reach towards the boney ridge (alveolar ridge) that is behind your upper teeth.
        In American English, you often see the [ɪ] sound when the letter “i” 
        is followed by a single consonant at the end of a word like in “fit”, 
        “lip”, and “bid,” or when you see the letter “i” followed by two consonants like in “miss”, “will”, and “itch.”",
        "images/small_cap_i_illustration.jpg",
        "audio/small_cap_i/male.mp3",
        "audio/small_cap_i/female.mp3",
        "itch,if,ill,miss,give,skin,bitter,middle,shiver");

INSERT INTO min_pair(audio, same, lesson_id) 
VALUES ("audio/r/r_mp1.mp3", 0, "ɹ"), 
    ("audio/r/r_mp2.mp3", 1, "ɹ"), 
    ("audio/r/r_mp3.mp3", 0, "ɹ"), 
    ("audio/r/r_mp4.mp3", 0, "ɹ"), 
    ("audio/r/r_mp5.mp3", 1, "ɹ"),
    ("audio/r/r_mp6.mp3", 0, "ɹ"), 
    ("audio/r/r_mp7.mp3", 1, "ɹ"), 
    ("audio/r/r_mp8.mp3", 1, "ɹ"), 
    ("audio/r/r_mp9.mp3", 0, "ɹ"), 
    ("audio/r/r_mp10.mp3", 1, "ɹ"),
    ("audio/ash/ash_1_f.mp3", 0, "æ"),
    ("audio/ash/ash_2_t.mp3", 1, "æ"),
    ("audio/ash/ash_4_f.mp3", 0, "æ"),
    ("audio/ash/ash_5_t.mp3", 1, "æ"),
    ("audio/ash/ash_6_f.mp3", 0, "æ"),
    ("audio/ash/ash_7_t.mp3", 1, "æ"),
    ("audio/ash/ash_9_f.mp3", 0, "æ"),
    ("audio/ash/ash_10_t.mp3", 1, "æ"),
    ("audio/epsilon/epsilon_1_t.mp3", 1, "ɛ"),
    ("audio/epsilon/epsilon_2_f.mp3", 0, "ɛ"),
    ("audio/epsilon/epsilon_3_f.mp3", 0, "ɛ"),
    ("audio/epsilon/epsilon_4_t.mp3", 1, "ɛ"),
    ("audio/epsilon/epsilon_5_f.mp3", 0, "ɛ"),
    ("audio/epsilon/epsilon_6_t.mp3", 1, "ɛ"),
    ("audio/epsilon/epsilon_7_f.mp3", 0, "ɛ"),
    ("audio/epsilon/epsilon_8_t.mp3", 1, "ɛ"),
    ("audio/epsilon/epsilon_9_f.mp3", 0, "ɛ"),
    ("audio/epsilon/epsilon_10_t.mp3", 1, "ɛ"),
    ("audio/small_cap_i/small_cap_i_1_t.mp3", 1, "ɪ"),
    ("audio/small_cap_i/small_cap_i_2_f.mp3", 0, "ɪ"),
    ("audio/small_cap_i/small_cap_i_3_f.mp3", 0, "ɪ"),
    ("audio/small_cap_i/small_cap_i_4_f.mp3", 0, "ɪ"),
    ("audio/small_cap_i/small_cap_i_5_t.mp3", 1, "ɪ"),
    ("audio/small_cap_i/small_cap_i_6_t.mp3", 1, "ɪ"),
    ("audio/small_cap_i/small_cap_i_7_f.mp3", 0, "ɪ"),
    ("audio/small_cap_i/small_cap_i_8_t.mp3", 1, "ɪ"),
    ("audio/small_cap_i/small_cap_i_9_f.mp3", 0, "ɪ"),
    ("audio/small_cap_i/small_cap_i_10_t.mp3", 1, "ɪ");


INSERT INTO role("name") 
VALUES ("student"), 
        ("teacher"), 
        ("researcher"), 
        ("admin");