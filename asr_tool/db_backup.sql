--
-- PostgreSQL database dump
--

-- Dumped from database version 12.6 (Ubuntu 12.6-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.6 (Ubuntu 12.6-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: feedback; Type: TABLE; Schema: public; Owner: app
--

CREATE TABLE public.feedback (
    id integer NOT NULL,
    date timestamp without time zone NOT NULL,
    easy_to_use character varying(10),
    fun_to_use integer,
    provides_feedback integer,
    is_helpful integer,
    likes character varying(1048),
    dislikes character varying(1048)
);


ALTER TABLE public.feedback OWNER TO app;

--
-- Name: feedback_id_seq; Type: SEQUENCE; Schema: public; Owner: app
--

CREATE SEQUENCE public.feedback_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.feedback_id_seq OWNER TO app;

--
-- Name: feedback_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: app
--

ALTER SEQUENCE public.feedback_id_seq OWNED BY public.feedback.id;


--
-- Name: lesson_content; Type: TABLE; Schema: public; Owner: app
--

CREATE TABLE public.lesson_content (
    sound character varying(3) NOT NULL,
    intro_text text,
    audio_folder character varying(100),
    illustration character varying(100),
    example_audio_male character varying(100),
    example_audio_female character varying(100),
    quiz_words character varying(100)
);


ALTER TABLE public.lesson_content OWNER TO app;

--
-- Name: min_pair; Type: TABLE; Schema: public; Owner: app
--

CREATE TABLE public.min_pair (
    id integer NOT NULL,
    audio character varying(100),
    same boolean,
    lesson_id character varying(3) NOT NULL
);


ALTER TABLE public.min_pair OWNER TO app;

--
-- Name: min_pair_id_seq; Type: SEQUENCE; Schema: public; Owner: app
--

CREATE SEQUENCE public.min_pair_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.min_pair_id_seq OWNER TO app;

--
-- Name: min_pair_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: app
--

ALTER SEQUENCE public.min_pair_id_seq OWNED BY public.min_pair.id;


--
-- Name: practiced_pair; Type: TABLE; Schema: public; Owner: app
--

CREATE TABLE public.practiced_pair (
    id integer NOT NULL,
    actual_word character varying(100),
    intended_word character varying(100),
    transcript_id integer NOT NULL
);


ALTER TABLE public.practiced_pair OWNER TO app;

--
-- Name: practiced_pair_id_seq; Type: SEQUENCE; Schema: public; Owner: app
--

CREATE SEQUENCE public.practiced_pair_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.practiced_pair_id_seq OWNER TO app;

--
-- Name: practiced_pair_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: app
--

ALTER SEQUENCE public.practiced_pair_id_seq OWNED BY public.practiced_pair.id;


--
-- Name: rating; Type: TABLE; Schema: public; Owner: app
--

CREATE TABLE public.rating (
    id integer NOT NULL,
    date timestamp without time zone NOT NULL,
    rating integer,
    feedback character varying(1048)
);


ALTER TABLE public.rating OWNER TO app;

--
-- Name: rating_id_seq; Type: SEQUENCE; Schema: public; Owner: app
--

CREATE SEQUENCE public.rating_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.rating_id_seq OWNER TO app;

--
-- Name: rating_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: app
--

ALTER SEQUENCE public.rating_id_seq OWNED BY public.rating.id;


--
-- Name: transcript; Type: TABLE; Schema: public; Owner: app
--

CREATE TABLE public.transcript (
    id integer NOT NULL,
    prompt text,
    text text,
    date timestamp without time zone NOT NULL,
    main_practice_time double precision,
    sound_practice_time double precision,
    practiced_sounds character varying(3),
    user_id integer NOT NULL
);


ALTER TABLE public.transcript OWNER TO app;

--
-- Name: transcript_id_seq; Type: SEQUENCE; Schema: public; Owner: app
--

CREATE SEQUENCE public.transcript_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.transcript_id_seq OWNER TO app;

--
-- Name: transcript_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: app
--

ALTER SEQUENCE public.transcript_id_seq OWNED BY public.transcript.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: app
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(100),
    role character varying(10)
);


ALTER TABLE public."user" OWNER TO app;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: app
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO app;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: app
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: user_info; Type: TABLE; Schema: public; Owner: app
--

CREATE TABLE public.user_info (
    id integer NOT NULL,
    age integer,
    gender character varying(25),
    native_lang character varying(100),
    time_studying_english integer,
    self_assessed_eng_ability character varying(13),
    how_found_site character varying(200),
    num_practice_sess integer,
    user_id integer NOT NULL
);


ALTER TABLE public.user_info OWNER TO app;

--
-- Name: user_info_id_seq; Type: SEQUENCE; Schema: public; Owner: app
--

CREATE SEQUENCE public.user_info_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_info_id_seq OWNER TO app;

--
-- Name: user_info_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: app
--

ALTER SEQUENCE public.user_info_id_seq OWNED BY public.user_info.id;


--
-- Name: feedback id; Type: DEFAULT; Schema: public; Owner: app
--

ALTER TABLE ONLY public.feedback ALTER COLUMN id SET DEFAULT nextval('public.feedback_id_seq'::regclass);


--
-- Name: min_pair id; Type: DEFAULT; Schema: public; Owner: app
--

ALTER TABLE ONLY public.min_pair ALTER COLUMN id SET DEFAULT nextval('public.min_pair_id_seq'::regclass);


--
-- Name: practiced_pair id; Type: DEFAULT; Schema: public; Owner: app
--

ALTER TABLE ONLY public.practiced_pair ALTER COLUMN id SET DEFAULT nextval('public.practiced_pair_id_seq'::regclass);


--
-- Name: rating id; Type: DEFAULT; Schema: public; Owner: app
--

ALTER TABLE ONLY public.rating ALTER COLUMN id SET DEFAULT nextval('public.rating_id_seq'::regclass);


--
-- Name: transcript id; Type: DEFAULT; Schema: public; Owner: app
--

ALTER TABLE ONLY public.transcript ALTER COLUMN id SET DEFAULT nextval('public.transcript_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: app
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Name: user_info id; Type: DEFAULT; Schema: public; Owner: app
--

ALTER TABLE ONLY public.user_info ALTER COLUMN id SET DEFAULT nextval('public.user_info_id_seq'::regclass);


--
-- Data for Name: feedback; Type: TABLE DATA; Schema: public; Owner: app
--

COPY public.feedback (id, date, easy_to_use, fun_to_use, provides_feedback, is_helpful, likes, dislikes) FROM stdin;
1	2021-05-02 03:24:11.385522	\N	\N	\N	\N	\N	\N
2	2021-05-02 04:20:26.188651	\N	\N	\N	\N	\N	\N
3	2021-05-02 04:20:26.188651	\N	\N	\N	\N	\N	\N
\.


--
-- Data for Name: lesson_content; Type: TABLE DATA; Schema: public; Owner: app
--

COPY public.lesson_content (sound, intro_text, audio_folder, illustration, example_audio_male, example_audio_female, quiz_words) FROM stdin;
ɹ	The English “r” sound, [ɹ] is made by curling your tongue towards the top of your mouth. You can create the curl with the tip or back of your tongue. The illustration below shows both ways to create the sound.\r\n\r\nIn American English, the “r” sound can be expected most times that you see “r” in spelling.	audio/r/	r_illustration.jpg	male.mp3	female.mp3	read,right,role,mirror,firing,sores,veer,tire,roar
æ	There are two sounds that you commonly find with the “a” spelling. In this lesson, we focus on the sound [æ] which can be found in the words, “cat”, “bag” and “lab”. [æ] is considered a lax, low, front vowel. \r\nLower your jaw and lay your tongue along the bottom of your mouth. Most speakers also pull their lips back a little to spread them open.\r\n In American English, you often see the [æ] sound when the letter “a” is followed by a single consonant at the end of a word like in “bat”, “cat”, and “slap,” or when you see the letter “a”  followed by two consonants like in “band”, “pack”, and “racket.”\r\n	audio/ash/	ash_illustration.jpg	male.mp3	female.mp3	act,add,axe,back,sad,hat,packet,rapture,sadden
ɛ	There are two sounds that you commonly find with the “e” spelling. \r\nIn this lesson, we focus on the sound [ɛ] which can be found in the words, “fed”, “bet” and “leg”. \r\n[ɛ] is considered a lax, mid, front vowel. Although the front of your tongue should reach a little towards the boney ridge (alveolar ridge) that is behind your upper teeth,  your tongue can be mostly relaxed lightly sitting along the bottom of your mouth.\r\nIn American English, you often see the [ɛ] sound when the letter “e” is followed by a single consonant at the end of a word like in “bet”, “red”, and “leg,” or when you see the letter “e” followed by two consonants like in “edge”, “debt”, and “bend.” Occasionally, you will also find [ɛ] with an “ea” spelling, like in “head,” “dead,” and “bread."	audio/epsilon/	epsilon_illustration.jpg	male.mp3	female.mp3	edge,etch,end,beg,red,set,leather,better,pedal
ɪ	There are two sounds that you commonly find with the “i” spelling. \r\nIn this lesson, we focus on the sound [ɪ] which can be found in the words,  “fit”, “lip” and “bid”. [ɪ] is considered a lax, high, front vowel. The front of your tongue should reach towards the boney ridge (alveolar ridge) that is behind your upper teeth.\r\nIn American English, you often see the [ɪ] sound when the letter “i” \r\n\r\n        is followed by a single consonant at the end of a word like in “fit”, \r\n\r\n        “lip”, and “bid,” or when you see the letter “i” followed by two consonants like in “miss”, “will”, and “itch.”",\r\n	audio/small_cap_i/	small_cap_i_illustration.jpg	male.mp3	female.mp3	itch,if,ill,miss,give,skin,bitter,middle,shiver
ʌ	There are two sounds that you commonly find with the “u” spelling. \r\nIn this lesson, we focus on the sound [ʌ] which can be found in the words,  “cut”, “fund” and “shut”. [ʌ] is considered a lax, mid, central vowel. \r\nIn American English, you often see the [ʌ] sound when the letter “u” is followed by two consonants, like in “fund” or “luck” or when you see “u” followed by a single consonant at the end of a word, like in “cut” and “up”.\r\n	audio/caret/	caret_illustration.jpeg	male.mp3	female.mp3	up,ugly,uncle,cut,fund,luck,crutch,sputter,cuddle
e	There are two sounds that you commonly find with the “a” spelling. \r\nIn this lesson, we focus on the sound [e] which can be found in the words, “aid”, “lake” and “save”. [e] is considered a tense, mid, front vowel. \r\nLips will be close to a rest position but may be slightly spread.\r\nIn American English, you often see the [e] sound when the letter “a” is followed by a single consonant and then the letter “e”, like in “fate” or “sale” or when the letter “a” is followed by another vowel letter (most commonly an “i”, like in “aid” or “rain”.\r\n	audio/e/	e_illustration.jpeg	male.mp3	female.mp3	aid,ace,ape,race,save,lake,played,sprayed,failed
m	The English “m” sound, [m] is made by briefly closing the lips. Air passes through the nose. The vocal cords will vibrate. The illustration below shows how to create the sound.\r\nIn American English, the “m” sound can be expected most times that you see “m” in spelling.	audio/m/	m_illustration.gif	male.mp3	female.mp3	map,mow,mail,homes,scammer,gamed,foam,sum,gleam
ʤ	The English “j” sound, [ʤ] is made by pressing the tip of the tongue against the ridge behind the top teeth\r\nand the sides of the tongue against the top side teeth. \r\nThe vocal cords will vibrate. The illustration below shows both ways to create the sound.\r\nIn American English, the “j” sound can be expected most times that you see “j” in spelling. \r\nIt can also be occur when you see “ge” or “gi” in American English.\r\n	audio/j/	j_illustration.gif	male.wav	female.wav	joy,just,giant,suggest,religion,major,large,huge,message
ʃ	The English “sh” sound, [ʃ] is made by bringing the middle of tongue up slightly and puckering the lips. \r\nThe vocal cords will not vibrate. The illustration below shows both ways to create the sound.\r\nIn American English, the “sh” sound can be expected most times that you see “sh” in spelling. \r\nIt can also been seen some instances of “ti” and “ss” in American English.	audio/esh/	esh_illustration.gif	male.wav	female.wav	she,show,sure,portion,assure,fashion,splash,wish,brush
tʃ	The English “ch” sound, [tʃ] is made by pressing the tip of the tongue against the ridge behind the top teeth and the sides of the tongue against the top side teeth. The vocal cords will not vibrate. \r\nThe illustration below shows both ways to create the sound.\r\nIn American English, the “ch” sound can be expected most times that you see “ch” or “tch” in spelling.	audio/ch/	ch_illustration.gif	male.wav	female.wav	chin,choke,cheap,watching,kitchen,searches,batch,teach,rich
w	The English “w” sound, [w] is made by forming a small, tight circle with your lips.\r\nThe illustration below shows both ways to create the sound.\r\nIn American English, the “w” sound can be expected most times that you see “w” or “wh” in spelling.	audio/w/	w_illustration.gif	male.wav	female.wav	worse,wick,white,walkaway,always,kiwi,wow,window,now
v	The English “v” sound, [v] is made by pressing the top teeth into the back of the bottom lip.\r\nThe illustration below shows both ways to create the sound.\r\nIn American English, the “v” sound can be expected most times that you see “v” in spelling.\r\n	audio/v/	v_illustration.gif	male.wav	female.wav	vent,vine,veer,waving,haven't,lives,serve,love,brave
o	There are two sounds that you commonly find with the “o” spelling. \r\nIn this lesson, we focus on the sound [o] which can be found in the words, “home”, “phone” and “boat”. [o] is considered a tense, mid, back vowel. It is also rounded, which means the lips need to push out while creating a circle to make the sound.\r\nIn American English, you often see the [o] sound when the letter “o” is followed by a single consonant and then the letter “e”, like in “home” or “phone” or when you see an “o” followed by another vowel letter, like in “boat” or “coat.”	audio/o/	o_illustration.jpeg	male.mp3	female.mp3	oat,opal,oboe,go,doe,slow,boat,home,phone
u	There are two sounds that you commonly find with the “u” spelling. \r\nIn this lesson, we focus on the sound [u] which can be found in the words, “rule”, “fool” and “useful”. [u] is considered a tense, high, back vowel. \r\nIt is also rounded, which means the lips need to push out while creating a circle while making the sound.\r\nIn American English, you often see the [u] sound when the letter “u” is followed by a single consonant and then the letter “e”, like in “rule” or “tune”, or when you see a double “oo” like in “fool” or “pool”. \r\nWords that begin with a “u” in spelling may also have the [u]sound, but are likely to start with a [y] sound, like at the beginning “useful” which is pronounced [yusfəl].\r\n	audio/u/	u_illustration.jpeg	male.mp3	female.mp3	rule,tune,cute,pool,fool,cool,useful,union,uniform
b	The English “b” sound, [b] is made by briefly closing the lips.  The sound is made when the air is released through the mouth. The vocal cords will vibrate. The illustration below shows both ways to create the sound.\r\nIn American English, the “b” sound can be expected most times that you see “b” in spelling.\r\n	audio/b/	b_illustration.gif	male.mp3	female.mp3	buy,bear,bore,ribbed,pubs,mobbed,tribe,cub,lab
n	The English “n” sound, [n] is made by pressing the tip of the tongue against the ridge behind the top teeth and the sides of the tongue against the top side teeth. Air passes through the nose. The vocal cords will vibrate. The illustration below shows both ways to create the sound.\r\nIn American English, the “n” sound can be expected most times that you see “n” in spelling.	audio/n/	n_illustration.gif	male.mp3	female.mp3	nap,no,nail,hones,scanner,gained,phone,sun,glean
d	The English “d” sound, [d] is made by pressing the tip of the tongue against the ridge behind the top teeth and the sides of the tongue against the top side teeth. The vocal cords will vibrate. The illustration below shows how to create the sound.\r\nIn American English, the “d” sound can be expected most times that you see “d” in spelling.	audio/d/	d_illustration.gif	male.mp3	female.mp3	down,faded,card,drain,codes,said,den,beds,weighed
ð	The voiced English “th” sound, [ð] is made by placing the tip of your tongue between your front teeth and allowing air to force itself between the small gaps between your tongue and teeth. While making the sound, you also need to allow your vocal cords to vibrate (like in the sounds [z] or [v]). \r\nIn American English, there are two sounds associated with “th” spellings. The [ð] is less common, but is particularly likely when at the beginning of function words (like demonstratives, “there” and “that”) or when it comes before an “er,” like in “mother” and “either.” 	audio/eth/	eth_illustration.jpeg	male.mp3	female.mp3	there,they,either,that,father,breathe,though,mother,soothe
\.


--
-- Data for Name: min_pair; Type: TABLE DATA; Schema: public; Owner: app
--

COPY public.min_pair (id, audio, same, lesson_id) FROM stdin;
1	r_mp1.mp3	f	ɹ
2	r_mp2.mp3	t	ɹ
3	r_mp3.mp3	f	ɹ
4	r_mp4.mp3	f	ɹ
5	r_mp5.mp3	t	ɹ
6	r_mp6.mp3	f	ɹ
7	r_mp7.mp3	t	ɹ
8	r_mp8.mp3	t	ɹ
9	r_mp9.mp3	f	ɹ
10	r_mp10.mp3	t	ɹ
11	ash_1_f.mp3	f	æ
12	ash_2_t.mp3	t	æ
13	ash_4_f.mp3	f	æ
14	ash_5_t.mp3	t	æ
15	ash_6_f.mp3	f	æ
16	ash_7_t.mp3	t	æ
17	ash_9_f.mp3	f	æ
18	ash_10_t.mp3	t	æ
19	epsilon_1_t.mp3	t	ɛ
20	epsilon_2_f.mp3	f	ɛ
21	epsilon_3_f.mp3	f	ɛ
22	epsilon_4_t.mp3	t	ɛ
23	epsilon_5_f.mp3	f	ɛ
24	epsilon_6_t.mp3	t	ɛ
25	epsilon_7_f.mp3	f	ɛ
26	epsilon_8_t.mp3	t	ɛ
27	epsilon_9_f.mp3	f	ɛ
28	epsilon_10_t.mp3	t	ɛ
29	small_cap_i_1_t.mp3	t	ɪ
30	small_cap_i_2_f.mp3	f	ɪ
31	small_cap_i_3_f.mp3	f	ɪ
32	small_cap_i_4_f.mp3	f	ɪ
33	small_cap_i_5_t.mp3	t	ɪ
34	small_cap_i_6_t.mp3	t	ɪ
35	small_cap_i_7_f.mp3	f	ɪ
36	small_cap_i_8_t.mp3	t	ɪ
37	small_cap_i_9_f.mp3	f	ɪ
38	small_cap_i_10_t.mp3	t	ɪ
44	j_6_f.wav	f	ʤ
45	j_7_f.wav	f	ʤ
46	j_8_t.wav	t	ʤ
47	j_9_f.wav	f	ʤ
48	j_10_t.wav	t	ʤ
39	j_1_f.wav	f	ʤ
40	j_2_t.wav	t	ʤ
138	m_1_f.mp3	f	m
49	b_1_f.mp3	f	b
50	b_2_f.mp3	f	b
51	b_3_t.mp3	t	b
52	b_4_f.mp3	f	b
53	b_5_f.mp3	f	b
54	b_6_f.mp3	f	b
55	b_7_t.mp3	t	b
57	b_9_f.mp3	f	b
58	b_10_f.mp3	f	b
59	d_1_f.mp3	f	d
60	d_2_f.mp3	f	d
61	d_3_t.mp3	t	d
62	d_4_f.mp3	f	d
63	d_5_t.mp3	t	d
64	d_6_f.mp3	f	d
65	d_7_t.mp3	t	d
66	d_8_f.mp3	f	d
67	d_9_f.mp3	f	d
68	d_10_t.mp3	t	d
69	esh_1_f.mp3	f	ʃ
70	esh_2_t.mp3	t	ʃ
71	esh_3_f.mp3	f	ʃ
72	esh_4_f.mp3	f	ʃ
73	esh_5_f.mp3	f	ʃ
74	esh_6_t.mp3	t	ʃ
75	esh_7_f.mp3	f	ʃ
76	esh_8_f.mp3	f	ʃ
77	esh_9_t.mp3	t	ʃ
78	esh_10_t.mp3	t	ʃ
79	e_1_f.mp3	f	e
80	e_2_t.mp3	t	e
81	e_3_f.mp3	f	e
82	e_4_f.mp3	f	e
83	e_5_t.mp3	t	e
84	e_6_t.mp3	t	e
85	e_7_f.mp3	f	e
86	e_8_t.mp3	t	e
87	e_9_f.mp3	f	e
88	e_10_t.mp3	t	e
89	o_1_t.mp3	t	o
90	o_2_f.mp3	f	o
91	o_3_f.mp3	f	o
92	o_4_t.mp3	t	o
93	o_5_f.mp3	f	o
94	o_6_t.mp3	t	o
95	o_7_f.mp3	f	o
96	o_8_t.mp3	t	o
97	o_9_t.mp3	t	o
98	o_10_f.mp3	f	o
99	u_1_t.mp3	t	u
100	u_2_t.mp3	t	u
101	u_3_f.mp3	f	u
102	u_4_t.mp3	t	u
103	u_5_f.mp3	f	u
104	u_6_t.mp3	t	u
105	u_7_f.mp3	f	u
106	u_8_t.mp3	t	u
107	u_9_f.mp3	f	u
108	u_10_t.mp3	t	u
109	v_1_f.mp3	f	v
110	v_2_f.mp3	f	v
111	v_3_t.mp3	t	v
112	v_4_f.mp3	f	v
113	v_5_f.mp3	f	v
114	v_6_f.mp3	f	v
115	v_7_t.mp3	f	v
116	v_8_f.mp3	f	v
117	v_9_t.mp3	t	v
118	v_10_f.mp3	f	v
119	w_1_f.mp3	f	w
120	w_2_f.mp3	f	w
121	w_3_t.mp3	t	w
122	w_4_f.mp3	f	w
123	w_5_f.mp3	f	w
124	w_6_f.mp3	f	w
125	w_7_t.mp3	t	w
126	w_8_f.mp3	f	w
127	w_9_f.mp3	f	w
128	n_1_f.mp3	f	n
129	n_2_f.mp3	f	n
130	n_3_t.mp3	t	n
131	n_4_f.mp3	f	n
132	n_5_t.mp3	t	n
133	n_6_f.mp3	f	n
134	n_7_f.mp3	f	n
135	n_8_t.mp3	t	n
136	n_9_f.mp3	f	n
137	n_10_f.mp3	f	n
139	m_2_f.mp3	f	m
140	m_3_t.mp3	t	m
141	m_4_f.mp3	f	m
142	m_5_t.mp3	t	m
143	m_6_f.mp3	f	m
144	m_7_t.mp3	t	m
145	m_8_t.mp3	t	m
146	m_9_f.mp3	f	m
147	m_10_f.mp3	f	m
43	j_5_t.wav	t	ʤ
42	j_4_f.wav	f	ʤ
56	b_8_t.mp3	t	b
148	eth_1_t.mp3	t	ð
149	eth_2_t.mp3	t	ð
150	eth_3_f.mp3	f	ð
151	eth_4_f.mp3	f	ð
152	eth_5_t.mp3	t	ð
153	eth_6_f.mp3	f	ð
154	eth_7_f.mp3	f	ð
155	eth_8_t.mp3	t	ð
156	eth_9_f.mp3	f	ð
157	eth_10_f.mp3	f	ð
\.


--
-- Data for Name: practiced_pair; Type: TABLE DATA; Schema: public; Owner: app
--

COPY public.practiced_pair (id, actual_word, intended_word, transcript_id) FROM stdin;
1	black	rack	10
2	Brown	round	11
3	test	rest	12
\.


--
-- Data for Name: rating; Type: TABLE DATA; Schema: public; Owner: app
--

COPY public.rating (id, date, rating, feedback) FROM stdin;
\.


--
-- Data for Name: transcript; Type: TABLE DATA; Schema: public; Owner: app
--

COPY public.transcript (id, prompt, text, date, main_practice_time, sound_practice_time, practiced_sounds, user_id) FROM stdin;
12	https://images.unsplash.com/photo-1618713041735-adb0de8316ea?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max	    test  	2021-05-02 23:30:08.785232	15.890849	7519.67498	ɹ:	2
1	https://images.unsplash.com/photo-1617651632909-4a3ff4e8098d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max	            testing 1 2 3  	2021-05-02 03:24:11.396028	60.0615	0		2
10	https://images.unsplash.com/photo-1617363101550-894562f03f36?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max	                      light bulbs and black  	2021-05-02 22:22:53.873503	32.78796	0		2
20	https://images.unsplash.com/photo-1618282250512-1fafea60fb60?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max		2021-05-03 02:04:34.593573	196.443641	285.78082	ɹ:	2
11	https://images.unsplash.com/photo-1617368557308-dfa88f9d3c61?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max	    Brown  	2021-05-02 22:22:53.951083	3971.555464	0		2
5	https://images.unsplash.com/photo-1619558978755-9c1dafe68515?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max	          hello hello hello  	2021-05-02 04:20:25.849727	6.6745470000000005	0		3
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: app
--

COPY public."user" (id, email, password, role) FROM stdin;
1	salukispeech@gmail.com	sha256$uG7XBi0p$391681a830a0f19553a091c670aa637e017847ab72534f22b1bcc407cea51339	admin
2	student@student.com	sha256$CjKzluAf$34ed4d453af5e52bf06ab50f973829b0e7e855a2231f0df1fc7308fb06fc461c	student
3	simon.markus9@gmail.com	sha256$qBHgXIlY$350f6395345138dcd0ba532fd124c57aa537c14c783965678eb1cf91d302d0bd	student
\.


--
-- Data for Name: user_info; Type: TABLE DATA; Schema: public; Owner: app
--

COPY public.user_info (id, age, gender, native_lang, time_studying_english, self_assessed_eng_ability, how_found_site, num_practice_sess, user_id) FROM stdin;
2	\N	\N	---	\N	\N	\N	1	3
1	\N	\N	---	\N	\N	\N	3	2
\.


--
-- Name: feedback_id_seq; Type: SEQUENCE SET; Schema: public; Owner: app
--

SELECT pg_catalog.setval('public.feedback_id_seq', 3, true);


--
-- Name: min_pair_id_seq; Type: SEQUENCE SET; Schema: public; Owner: app
--

SELECT pg_catalog.setval('public.min_pair_id_seq', 157, true);


--
-- Name: practiced_pair_id_seq; Type: SEQUENCE SET; Schema: public; Owner: app
--

SELECT pg_catalog.setval('public.practiced_pair_id_seq', 4, true);


--
-- Name: rating_id_seq; Type: SEQUENCE SET; Schema: public; Owner: app
--

SELECT pg_catalog.setval('public.rating_id_seq', 1, false);


--
-- Name: transcript_id_seq; Type: SEQUENCE SET; Schema: public; Owner: app
--

SELECT pg_catalog.setval('public.transcript_id_seq', 20, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: app
--

SELECT pg_catalog.setval('public.user_id_seq', 3, true);


--
-- Name: user_info_id_seq; Type: SEQUENCE SET; Schema: public; Owner: app
--

SELECT pg_catalog.setval('public.user_info_id_seq', 2, true);


--
-- Name: feedback feedback_pkey; Type: CONSTRAINT; Schema: public; Owner: app
--

ALTER TABLE ONLY public.feedback
    ADD CONSTRAINT feedback_pkey PRIMARY KEY (id);


--
-- Name: lesson_content lesson_content_pkey; Type: CONSTRAINT; Schema: public; Owner: app
--

ALTER TABLE ONLY public.lesson_content
    ADD CONSTRAINT lesson_content_pkey PRIMARY KEY (sound);


--
-- Name: min_pair min_pair_pkey; Type: CONSTRAINT; Schema: public; Owner: app
--

ALTER TABLE ONLY public.min_pair
    ADD CONSTRAINT min_pair_pkey PRIMARY KEY (id);


--
-- Name: practiced_pair practiced_pair_pkey; Type: CONSTRAINT; Schema: public; Owner: app
--

ALTER TABLE ONLY public.practiced_pair
    ADD CONSTRAINT practiced_pair_pkey PRIMARY KEY (id);


--
-- Name: rating rating_pkey; Type: CONSTRAINT; Schema: public; Owner: app
--

ALTER TABLE ONLY public.rating
    ADD CONSTRAINT rating_pkey PRIMARY KEY (id);


--
-- Name: transcript transcript_pkey; Type: CONSTRAINT; Schema: public; Owner: app
--

ALTER TABLE ONLY public.transcript
    ADD CONSTRAINT transcript_pkey PRIMARY KEY (id);


--
-- Name: user user_email_key; Type: CONSTRAINT; Schema: public; Owner: app
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_email_key UNIQUE (email);


--
-- Name: user_info user_info_pkey; Type: CONSTRAINT; Schema: public; Owner: app
--

ALTER TABLE ONLY public.user_info
    ADD CONSTRAINT user_info_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: app
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: min_pair min_pair_lesson_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: app
--

ALTER TABLE ONLY public.min_pair
    ADD CONSTRAINT min_pair_lesson_id_fkey FOREIGN KEY (lesson_id) REFERENCES public.lesson_content(sound);


--
-- Name: practiced_pair practiced_pair_transcript_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: app
--

ALTER TABLE ONLY public.practiced_pair
    ADD CONSTRAINT practiced_pair_transcript_id_fkey FOREIGN KEY (transcript_id) REFERENCES public.transcript(id);


--
-- Name: transcript transcript_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: app
--

ALTER TABLE ONLY public.transcript
    ADD CONSTRAINT transcript_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: user_info user_info_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: app
--

ALTER TABLE ONLY public.user_info
    ADD CONSTRAINT user_info_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- PostgreSQL database dump complete
--

