import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

const eventData = {
	"data": [
		{
			"id": "404982542002331",
			"name": "Bass Music Festival 3000",
			"description": "🎉🔊 Préparez-vous pour le Bass Music Festival 3000 – L'Expérience Ultime de Musique Électronique! 🎉🔊\n\nÊtes-vous prêts à vivre la nuit la plus épique de 2024? Marquez vos calendriers et préparez-vous pour une expérience musicale sans précédent – le Bass Music Festival 3000 débarque le 28 février 2024!\n\nPlongez dans un univers où la basse règne en maître, où chaque note vous transporte dans une autre dimension. Le Bass Music Festival 3000 n'est pas seulement un événement ; c'est une odyssée dans l'univers de la musique électronique. Nos scènes vibreront au rythme des meilleurs DJ internationaux, prêts à enflammer l'atmosphère avec des sets explosifs.\n\n🎶 Musique : Des basses profondes, des rythmes enivrants et des mélodies qui vous feront danser jusqu'au bout de la nuit. Du dubstep au drum and bass, en passant par l'electro et la house, chaque genre sera représenté pour satisfaire toutes les oreilles.\n\n🌟 Expérience : Le Bass Music Festival 3000, c'est plus qu'une soirée, c'est une immersion totale. Découvrez un spectacle de lumières et de pyrotechnie à la pointe de la technologie, des installations artistiques interactives et un espace de festival conçu pour élever votre expérience à un niveau supérieur.\n\n🍲 Gastronomie : Entre deux danses, régalez-vous avec notre sélection de food trucks, offrant une variété de délices culinaires pour tous les goûts.\n\n🌍 Lieu : Rejoignez-nous dans un lieu emblématique, choisi pour son ambiance unique et son cadre magnifique, promettant une nuit inoubliable sous les étoiles.\n\n🎟 Billets : Les places sont limitées! Ne manquez pas l'occasion de faire partie de l'histoire de la musique électronique. Réservez vos billets dès maintenant et assurez-vous une place au cœur de l'action!\n\nRejoignez la communauté des amateurs de basses et soyez prêts à vivre une aventure mémorable. Le Bass Music Festival 3000 vous attend pour une nuit de liberté, d'émotion et de basses puissantes. Êtes-vous prêts à relever le défi et à vivre le festival de vos rêves? On se voit là-bas! 🚀✨",
			"start_time": "2024-02-28T23:00:00+0100",
			"end_time": "2024-02-29T06:00:00+0100",
			"cover": {
				"offset_x": 50,
				"offset_y": 18,
				"source": "https://scontent-zrh1-1.xx.fbcdn.net/v/t39.30808-6/421836739_871249348130455_5689568235349629991_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=d8d9c5&_nc_eui2=AeG_EYKt4-KBPpOSc8GQGHi5Ike2bDg5eqoiR7ZsODl6qj2HR8mCOBI2sPlDmmpbvCkr6xUyNMbvY05uYuEGOlgX&_nc_ohc=m554PGeMQ6cAX8Km49R&_nc_ht=scontent-zrh1-1.xx&oh=00_AfAqXVU_C8lmLOsjX8AVSDPjkaFDhIAPlw9X410cVqpcUA&oe=65BF8400",
				"id": "906636898132188"
			},
			"guest_list_enabled": true,
			"is_canceled": false,
			"is_draft": false,
			"attending_count": 1,
			"interested_count": 1,
			"maybe_count": 1
		},
		{
			"id": "404982542002331",
			"name": "Bass Music Festival 3000",
			"description": "🎉🔊 Préparez-vous pour le Bass Music Festival 3000 – L'Expérience Ultime de Musique Électronique! 🎉🔊\n\nÊtes-vous prêts à vivre la nuit la plus épique de 2024? Marquez vos calendriers et préparez-vous pour une expérience musicale sans précédent – le Bass Music Festival 3000 débarque le 28 février 2024!\n\nPlongez dans un univers où la basse règne en maître, où chaque note vous transporte dans une autre dimension. Le Bass Music Festival 3000 n'est pas seulement un événement ; c'est une odyssée dans l'univers de la musique électronique. Nos scènes vibreront au rythme des meilleurs DJ internationaux, prêts à enflammer l'atmosphère avec des sets explosifs.\n\n🎶 Musique : Des basses profondes, des rythmes enivrants et des mélodies qui vous feront danser jusqu'au bout de la nuit. Du dubstep au drum and bass, en passant par l'electro et la house, chaque genre sera représenté pour satisfaire toutes les oreilles.\n\n🌟 Expérience : Le Bass Music Festival 3000, c'est plus qu'une soirée, c'est une immersion totale. Découvrez un spectacle de lumières et de pyrotechnie à la pointe de la technologie, des installations artistiques interactives et un espace de festival conçu pour élever votre expérience à un niveau supérieur.\n\n🍲 Gastronomie : Entre deux danses, régalez-vous avec notre sélection de food trucks, offrant une variété de délices culinaires pour tous les goûts.\n\n🌍 Lieu : Rejoignez-nous dans un lieu emblématique, choisi pour son ambiance unique et son cadre magnifique, promettant une nuit inoubliable sous les étoiles.\n\n🎟 Billets : Les places sont limitées! Ne manquez pas l'occasion de faire partie de l'histoire de la musique électronique. Réservez vos billets dès maintenant et assurez-vous une place au cœur de l'action!\n\nRejoignez la communauté des amateurs de basses et soyez prêts à vivre une aventure mémorable. Le Bass Music Festival 3000 vous attend pour une nuit de liberté, d'émotion et de basses puissantes. Êtes-vous prêts à relever le défi et à vivre le festival de vos rêves? On se voit là-bas! 🚀✨",
			"start_time": "2024-02-28T23:00:00+0100",
			"end_time": "2024-02-29T06:00:00+0100",
			"cover": {
				"offset_x": 50,
				"offset_y": 18,
				"source": "https://scontent-zrh1-1.xx.fbcdn.net/v/t39.30808-6/421836739_871249348130455_5689568235349629991_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=d8d9c5&_nc_eui2=AeG_EYKt4-KBPpOSc8GQGHi5Ike2bDg5eqoiR7ZsODl6qj2HR8mCOBI2sPlDmmpbvCkr6xUyNMbvY05uYuEGOlgX&_nc_ohc=m554PGeMQ6cAX8Km49R&_nc_ht=scontent-zrh1-1.xx&oh=00_AfAqXVU_C8lmLOsjX8AVSDPjkaFDhIAPlw9X410cVqpcUA&oe=65BF8400",
				"id": "906636898132188"
			},
			"guest_list_enabled": true,
			"is_canceled": false,
			"is_draft": false,
			"attending_count": 1,
			"interested_count": 1,
			"maybe_count": 1
		},
		{
			"id": "404982542002331",
			"name": "Bass Music Festival 3000",
			"description": "🎉🔊 Préparez-vous pour le Bass Music Festival 3000 – L'Expérience Ultime de Musique Électronique! 🎉🔊\n\nÊtes-vous prêts à vivre la nuit la plus épique de 2024? Marquez vos calendriers et préparez-vous pour une expérience musicale sans précédent – le Bass Music Festival 3000 débarque le 28 février 2024!\n\nPlongez dans un univers où la basse règne en maître, où chaque note vous transporte dans une autre dimension. Le Bass Music Festival 3000 n'est pas seulement un événement ; c'est une odyssée dans l'univers de la musique électronique. Nos scènes vibreront au rythme des meilleurs DJ internationaux, prêts à enflammer l'atmosphère avec des sets explosifs.\n\n🎶 Musique : Des basses profondes, des rythmes enivrants et des mélodies qui vous feront danser jusqu'au bout de la nuit. Du dubstep au drum and bass, en passant par l'electro et la house, chaque genre sera représenté pour satisfaire toutes les oreilles.\n\n🌟 Expérience : Le Bass Music Festival 3000, c'est plus qu'une soirée, c'est une immersion totale. Découvrez un spectacle de lumières et de pyrotechnie à la pointe de la technologie, des installations artistiques interactives et un espace de festival conçu pour élever votre expérience à un niveau supérieur.\n\n🍲 Gastronomie : Entre deux danses, régalez-vous avec notre sélection de food trucks, offrant une variété de délices culinaires pour tous les goûts.\n\n🌍 Lieu : Rejoignez-nous dans un lieu emblématique, choisi pour son ambiance unique et son cadre magnifique, promettant une nuit inoubliable sous les étoiles.\n\n🎟 Billets : Les places sont limitées! Ne manquez pas l'occasion de faire partie de l'histoire de la musique électronique. Réservez vos billets dès maintenant et assurez-vous une place au cœur de l'action!\n\nRejoignez la communauté des amateurs de basses et soyez prêts à vivre une aventure mémorable. Le Bass Music Festival 3000 vous attend pour une nuit de liberté, d'émotion et de basses puissantes. Êtes-vous prêts à relever le défi et à vivre le festival de vos rêves? On se voit là-bas! 🚀✨",
			"start_time": "2024-02-28T23:00:00+0100",
			"end_time": "2024-02-29T06:00:00+0100",
			"cover": {
				"offset_x": 50,
				"offset_y": 18,
				"source": "https://scontent-zrh1-1.xx.fbcdn.net/v/t39.30808-6/421836739_871249348130455_5689568235349629991_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=d8d9c5&_nc_eui2=AeG_EYKt4-KBPpOSc8GQGHi5Ike2bDg5eqoiR7ZsODl6qj2HR8mCOBI2sPlDmmpbvCkr6xUyNMbvY05uYuEGOlgX&_nc_ohc=m554PGeMQ6cAX8Km49R&_nc_ht=scontent-zrh1-1.xx&oh=00_AfAqXVU_C8lmLOsjX8AVSDPjkaFDhIAPlw9X410cVqpcUA&oe=65BF8400",
				"id": "906636898132188"
			},
			"guest_list_enabled": true,
			"is_canceled": false,
			"is_draft": false,
			"attending_count": 1,
			"interested_count": 1,
			"maybe_count": 1
		},
		{
			"id": "404982542002331",
			"name": "Bass Music Festival 3000",
			"description": "🎉🔊 Préparez-vous pour le Bass Music Festival 3000 – L'Expérience Ultime de Musique Électronique! 🎉🔊\n\nÊtes-vous prêts à vivre la nuit la plus épique de 2024? Marquez vos calendriers et préparez-vous pour une expérience musicale sans précédent – le Bass Music Festival 3000 débarque le 28 février 2024!\n\nPlongez dans un univers où la basse règne en maître, où chaque note vous transporte dans une autre dimension. Le Bass Music Festival 3000 n'est pas seulement un événement ; c'est une odyssée dans l'univers de la musique électronique. Nos scènes vibreront au rythme des meilleurs DJ internationaux, prêts à enflammer l'atmosphère avec des sets explosifs.\n\n🎶 Musique : Des basses profondes, des rythmes enivrants et des mélodies qui vous feront danser jusqu'au bout de la nuit. Du dubstep au drum and bass, en passant par l'electro et la house, chaque genre sera représenté pour satisfaire toutes les oreilles.\n\n🌟 Expérience : Le Bass Music Festival 3000, c'est plus qu'une soirée, c'est une immersion totale. Découvrez un spectacle de lumières et de pyrotechnie à la pointe de la technologie, des installations artistiques interactives et un espace de festival conçu pour élever votre expérience à un niveau supérieur.\n\n🍲 Gastronomie : Entre deux danses, régalez-vous avec notre sélection de food trucks, offrant une variété de délices culinaires pour tous les goûts.\n\n🌍 Lieu : Rejoignez-nous dans un lieu emblématique, choisi pour son ambiance unique et son cadre magnifique, promettant une nuit inoubliable sous les étoiles.\n\n🎟 Billets : Les places sont limitées! Ne manquez pas l'occasion de faire partie de l'histoire de la musique électronique. Réservez vos billets dès maintenant et assurez-vous une place au cœur de l'action!\n\nRejoignez la communauté des amateurs de basses et soyez prêts à vivre une aventure mémorable. Le Bass Music Festival 3000 vous attend pour une nuit de liberté, d'émotion et de basses puissantes. Êtes-vous prêts à relever le défi et à vivre le festival de vos rêves? On se voit là-bas! 🚀✨",
			"start_time": "2024-02-28T23:00:00+0100",
			"end_time": "2024-02-29T06:00:00+0100",
			"cover": {
				"offset_x": 50,
				"offset_y": 18,
				"source": "https://scontent-zrh1-1.xx.fbcdn.net/v/t39.30808-6/421836739_871249348130455_5689568235349629991_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=d8d9c5&_nc_eui2=AeG_EYKt4-KBPpOSc8GQGHi5Ike2bDg5eqoiR7ZsODl6qj2HR8mCOBI2sPlDmmpbvCkr6xUyNMbvY05uYuEGOlgX&_nc_ohc=m554PGeMQ6cAX8Km49R&_nc_ht=scontent-zrh1-1.xx&oh=00_AfAqXVU_C8lmLOsjX8AVSDPjkaFDhIAPlw9X410cVqpcUA&oe=65BF8400",
				"id": "906636898132188"
			},
			"guest_list_enabled": true,
			"is_canceled": false,
			"is_draft": false,
			"attending_count": 1,
			"interested_count": 1,
			"maybe_count": 1
		},
		{
			"id": "404982542002331",
			"name": "Bass Music Festival 3000",
			"description": "🎉🔊 Préparez-vous pour le Bass Music Festival 3000 – L'Expérience Ultime de Musique Électronique! 🎉🔊\n\nÊtes-vous prêts à vivre la nuit la plus épique de 2024? Marquez vos calendriers et préparez-vous pour une expérience musicale sans précédent – le Bass Music Festival 3000 débarque le 28 février 2024!\n\nPlongez dans un univers où la basse règne en maître, où chaque note vous transporte dans une autre dimension. Le Bass Music Festival 3000 n'est pas seulement un événement ; c'est une odyssée dans l'univers de la musique électronique. Nos scènes vibreront au rythme des meilleurs DJ internationaux, prêts à enflammer l'atmosphère avec des sets explosifs.\n\n🎶 Musique : Des basses profondes, des rythmes enivrants et des mélodies qui vous feront danser jusqu'au bout de la nuit. Du dubstep au drum and bass, en passant par l'electro et la house, chaque genre sera représenté pour satisfaire toutes les oreilles.\n\n🌟 Expérience : Le Bass Music Festival 3000, c'est plus qu'une soirée, c'est une immersion totale. Découvrez un spectacle de lumières et de pyrotechnie à la pointe de la technologie, des installations artistiques interactives et un espace de festival conçu pour élever votre expérience à un niveau supérieur.\n\n🍲 Gastronomie : Entre deux danses, régalez-vous avec notre sélection de food trucks, offrant une variété de délices culinaires pour tous les goûts.\n\n🌍 Lieu : Rejoignez-nous dans un lieu emblématique, choisi pour son ambiance unique et son cadre magnifique, promettant une nuit inoubliable sous les étoiles.\n\n🎟 Billets : Les places sont limitées! Ne manquez pas l'occasion de faire partie de l'histoire de la musique électronique. Réservez vos billets dès maintenant et assurez-vous une place au cœur de l'action!\n\nRejoignez la communauté des amateurs de basses et soyez prêts à vivre une aventure mémorable. Le Bass Music Festival 3000 vous attend pour une nuit de liberté, d'émotion et de basses puissantes. Êtes-vous prêts à relever le défi et à vivre le festival de vos rêves? On se voit là-bas! 🚀✨",
			"start_time": "2024-02-28T23:00:00+0100",
			"end_time": "2024-02-29T06:00:00+0100",
			"cover": {
				"offset_x": 50,
				"offset_y": 18,
				"source": "https://scontent-zrh1-1.xx.fbcdn.net/v/t39.30808-6/421836739_871249348130455_5689568235349629991_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=d8d9c5&_nc_eui2=AeG_EYKt4-KBPpOSc8GQGHi5Ike2bDg5eqoiR7ZsODl6qj2HR8mCOBI2sPlDmmpbvCkr6xUyNMbvY05uYuEGOlgX&_nc_ohc=m554PGeMQ6cAX8Km49R&_nc_ht=scontent-zrh1-1.xx&oh=00_AfAqXVU_C8lmLOsjX8AVSDPjkaFDhIAPlw9X410cVqpcUA&oe=65BF8400",
				"id": "906636898132188"
			},
			"guest_list_enabled": true,
			"is_canceled": false,
			"is_draft": false,
			"attending_count": 1,
			"interested_count": 1,
			"maybe_count": 1
		},
		{
			"id": "404982542002331",
			"name": "Bass Music Festival 3000",
			"description": "🎉🔊 Préparez-vous pour le Bass Music Festival 3000 – L'Expérience Ultime de Musique Électronique! 🎉🔊\n\nÊtes-vous prêts à vivre la nuit la plus épique de 2024? Marquez vos calendriers et préparez-vous pour une expérience musicale sans précédent – le Bass Music Festival 3000 débarque le 28 février 2024!\n\nPlongez dans un univers où la basse règne en maître, où chaque note vous transporte dans une autre dimension. Le Bass Music Festival 3000 n'est pas seulement un événement ; c'est une odyssée dans l'univers de la musique électronique. Nos scènes vibreront au rythme des meilleurs DJ internationaux, prêts à enflammer l'atmosphère avec des sets explosifs.\n\n🎶 Musique : Des basses profondes, des rythmes enivrants et des mélodies qui vous feront danser jusqu'au bout de la nuit. Du dubstep au drum and bass, en passant par l'electro et la house, chaque genre sera représenté pour satisfaire toutes les oreilles.\n\n🌟 Expérience : Le Bass Music Festival 3000, c'est plus qu'une soirée, c'est une immersion totale. Découvrez un spectacle de lumières et de pyrotechnie à la pointe de la technologie, des installations artistiques interactives et un espace de festival conçu pour élever votre expérience à un niveau supérieur.\n\n🍲 Gastronomie : Entre deux danses, régalez-vous avec notre sélection de food trucks, offrant une variété de délices culinaires pour tous les goûts.\n\n🌍 Lieu : Rejoignez-nous dans un lieu emblématique, choisi pour son ambiance unique et son cadre magnifique, promettant une nuit inoubliable sous les étoiles.\n\n🎟 Billets : Les places sont limitées! Ne manquez pas l'occasion de faire partie de l'histoire de la musique électronique. Réservez vos billets dès maintenant et assurez-vous une place au cœur de l'action!\n\nRejoignez la communauté des amateurs de basses et soyez prêts à vivre une aventure mémorable. Le Bass Music Festival 3000 vous attend pour une nuit de liberté, d'émotion et de basses puissantes. Êtes-vous prêts à relever le défi et à vivre le festival de vos rêves? On se voit là-bas! 🚀✨",
			"start_time": "2024-02-28T23:00:00+0100",
			"end_time": "2024-02-29T06:00:00+0100",
			"cover": {
				"offset_x": 50,
				"offset_y": 18,
				"source": "https://scontent-zrh1-1.xx.fbcdn.net/v/t39.30808-6/421836739_871249348130455_5689568235349629991_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=d8d9c5&_nc_eui2=AeG_EYKt4-KBPpOSc8GQGHi5Ike2bDg5eqoiR7ZsODl6qj2HR8mCOBI2sPlDmmpbvCkr6xUyNMbvY05uYuEGOlgX&_nc_ohc=m554PGeMQ6cAX8Km49R&_nc_ht=scontent-zrh1-1.xx&oh=00_AfAqXVU_C8lmLOsjX8AVSDPjkaFDhIAPlw9X410cVqpcUA&oe=65BF8400",
				"id": "906636898132188"
			},
			"guest_list_enabled": true,
			"is_canceled": false,
			"is_draft": false,
			"attending_count": 1,
			"interested_count": 1,
			"maybe_count": 1
		},
		{
			"id": "404982542002331",
			"name": "Bass Music Festival 3000",
			"description": "🎉🔊 Préparez-vous pour le Bass Music Festival 3000 – L'Expérience Ultime de Musique Électronique! 🎉🔊\n\nÊtes-vous prêts à vivre la nuit la plus épique de 2024? Marquez vos calendriers et préparez-vous pour une expérience musicale sans précédent – le Bass Music Festival 3000 débarque le 28 février 2024!\n\nPlongez dans un univers où la basse règne en maître, où chaque note vous transporte dans une autre dimension. Le Bass Music Festival 3000 n'est pas seulement un événement ; c'est une odyssée dans l'univers de la musique électronique. Nos scènes vibreront au rythme des meilleurs DJ internationaux, prêts à enflammer l'atmosphère avec des sets explosifs.\n\n🎶 Musique : Des basses profondes, des rythmes enivrants et des mélodies qui vous feront danser jusqu'au bout de la nuit. Du dubstep au drum and bass, en passant par l'electro et la house, chaque genre sera représenté pour satisfaire toutes les oreilles.\n\n🌟 Expérience : Le Bass Music Festival 3000, c'est plus qu'une soirée, c'est une immersion totale. Découvrez un spectacle de lumières et de pyrotechnie à la pointe de la technologie, des installations artistiques interactives et un espace de festival conçu pour élever votre expérience à un niveau supérieur.\n\n🍲 Gastronomie : Entre deux danses, régalez-vous avec notre sélection de food trucks, offrant une variété de délices culinaires pour tous les goûts.\n\n🌍 Lieu : Rejoignez-nous dans un lieu emblématique, choisi pour son ambiance unique et son cadre magnifique, promettant une nuit inoubliable sous les étoiles.\n\n🎟 Billets : Les places sont limitées! Ne manquez pas l'occasion de faire partie de l'histoire de la musique électronique. Réservez vos billets dès maintenant et assurez-vous une place au cœur de l'action!\n\nRejoignez la communauté des amateurs de basses et soyez prêts à vivre une aventure mémorable. Le Bass Music Festival 3000 vous attend pour une nuit de liberté, d'émotion et de basses puissantes. Êtes-vous prêts à relever le défi et à vivre le festival de vos rêves? On se voit là-bas! 🚀✨",
			"start_time": "2024-02-28T23:00:00+0100",
			"end_time": "2024-02-29T06:00:00+0100",
			"cover": {
				"offset_x": 50,
				"offset_y": 18,
				"source": "https://scontent-zrh1-1.xx.fbcdn.net/v/t39.30808-6/421836739_871249348130455_5689568235349629991_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=d8d9c5&_nc_eui2=AeG_EYKt4-KBPpOSc8GQGHi5Ike2bDg5eqoiR7ZsODl6qj2HR8mCOBI2sPlDmmpbvCkr6xUyNMbvY05uYuEGOlgX&_nc_ohc=m554PGeMQ6cAX8Km49R&_nc_ht=scontent-zrh1-1.xx&oh=00_AfAqXVU_C8lmLOsjX8AVSDPjkaFDhIAPlw9X410cVqpcUA&oe=65BF8400",
				"id": "906636898132188"
			},
			"guest_list_enabled": true,
			"is_canceled": false,
			"is_draft": false,
			"attending_count": 1,
			"interested_count": 1,
			"maybe_count": 1
		},
		{
			"id": "404982542002331",
			"name": "Bass Music Festival 3000",
			"description": "🎉🔊 Préparez-vous pour le Bass Music Festival 3000 – L'Expérience Ultime de Musique Électronique! 🎉🔊\n\nÊtes-vous prêts à vivre la nuit la plus épique de 2024? Marquez vos calendriers et préparez-vous pour une expérience musicale sans précédent – le Bass Music Festival 3000 débarque le 28 février 2024!\n\nPlongez dans un univers où la basse règne en maître, où chaque note vous transporte dans une autre dimension. Le Bass Music Festival 3000 n'est pas seulement un événement ; c'est une odyssée dans l'univers de la musique électronique. Nos scènes vibreront au rythme des meilleurs DJ internationaux, prêts à enflammer l'atmosphère avec des sets explosifs.\n\n🎶 Musique : Des basses profondes, des rythmes enivrants et des mélodies qui vous feront danser jusqu'au bout de la nuit. Du dubstep au drum and bass, en passant par l'electro et la house, chaque genre sera représenté pour satisfaire toutes les oreilles.\n\n🌟 Expérience : Le Bass Music Festival 3000, c'est plus qu'une soirée, c'est une immersion totale. Découvrez un spectacle de lumières et de pyrotechnie à la pointe de la technologie, des installations artistiques interactives et un espace de festival conçu pour élever votre expérience à un niveau supérieur.\n\n🍲 Gastronomie : Entre deux danses, régalez-vous avec notre sélection de food trucks, offrant une variété de délices culinaires pour tous les goûts.\n\n🌍 Lieu : Rejoignez-nous dans un lieu emblématique, choisi pour son ambiance unique et son cadre magnifique, promettant une nuit inoubliable sous les étoiles.\n\n🎟 Billets : Les places sont limitées! Ne manquez pas l'occasion de faire partie de l'histoire de la musique électronique. Réservez vos billets dès maintenant et assurez-vous une place au cœur de l'action!\n\nRejoignez la communauté des amateurs de basses et soyez prêts à vivre une aventure mémorable. Le Bass Music Festival 3000 vous attend pour une nuit de liberté, d'émotion et de basses puissantes. Êtes-vous prêts à relever le défi et à vivre le festival de vos rêves? On se voit là-bas! 🚀✨",
			"start_time": "2024-02-28T23:00:00+0100",
			"end_time": "2024-02-29T06:00:00+0100",
			"cover": {
				"offset_x": 50,
				"offset_y": 18,
				"source": "https://scontent-zrh1-1.xx.fbcdn.net/v/t39.30808-6/421836739_871249348130455_5689568235349629991_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=d8d9c5&_nc_eui2=AeG_EYKt4-KBPpOSc8GQGHi5Ike2bDg5eqoiR7ZsODl6qj2HR8mCOBI2sPlDmmpbvCkr6xUyNMbvY05uYuEGOlgX&_nc_ohc=m554PGeMQ6cAX8Km49R&_nc_ht=scontent-zrh1-1.xx&oh=00_AfAqXVU_C8lmLOsjX8AVSDPjkaFDhIAPlw9X410cVqpcUA&oe=65BF8400",
				"id": "906636898132188"
			},
			"guest_list_enabled": true,
			"is_canceled": false,
			"is_draft": false,
			"attending_count": 1,
			"interested_count": 1,
			"maybe_count": 1
		},
		{
			"id": "404982542002331",
			"name": "Bass Music Festival 3000",
			"description": "🎉🔊 Préparez-vous pour le Bass Music Festival 3000 – L'Expérience Ultime de Musique Électronique! 🎉🔊\n\nÊtes-vous prêts à vivre la nuit la plus épique de 2024? Marquez vos calendriers et préparez-vous pour une expérience musicale sans précédent – le Bass Music Festival 3000 débarque le 28 février 2024!\n\nPlongez dans un univers où la basse règne en maître, où chaque note vous transporte dans une autre dimension. Le Bass Music Festival 3000 n'est pas seulement un événement ; c'est une odyssée dans l'univers de la musique électronique. Nos scènes vibreront au rythme des meilleurs DJ internationaux, prêts à enflammer l'atmosphère avec des sets explosifs.\n\n🎶 Musique : Des basses profondes, des rythmes enivrants et des mélodies qui vous feront danser jusqu'au bout de la nuit. Du dubstep au drum and bass, en passant par l'electro et la house, chaque genre sera représenté pour satisfaire toutes les oreilles.\n\n🌟 Expérience : Le Bass Music Festival 3000, c'est plus qu'une soirée, c'est une immersion totale. Découvrez un spectacle de lumières et de pyrotechnie à la pointe de la technologie, des installations artistiques interactives et un espace de festival conçu pour élever votre expérience à un niveau supérieur.\n\n🍲 Gastronomie : Entre deux danses, régalez-vous avec notre sélection de food trucks, offrant une variété de délices culinaires pour tous les goûts.\n\n🌍 Lieu : Rejoignez-nous dans un lieu emblématique, choisi pour son ambiance unique et son cadre magnifique, promettant une nuit inoubliable sous les étoiles.\n\n🎟 Billets : Les places sont limitées! Ne manquez pas l'occasion de faire partie de l'histoire de la musique électronique. Réservez vos billets dès maintenant et assurez-vous une place au cœur de l'action!\n\nRejoignez la communauté des amateurs de basses et soyez prêts à vivre une aventure mémorable. Le Bass Music Festival 3000 vous attend pour une nuit de liberté, d'émotion et de basses puissantes. Êtes-vous prêts à relever le défi et à vivre le festival de vos rêves? On se voit là-bas! 🚀✨",
			"start_time": "2024-02-28T23:00:00+0100",
			"end_time": "2024-02-29T06:00:00+0100",
			"cover": {
				"offset_x": 50,
				"offset_y": 18,
				"source": "https://scontent-zrh1-1.xx.fbcdn.net/v/t39.30808-6/421836739_871249348130455_5689568235349629991_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=d8d9c5&_nc_eui2=AeG_EYKt4-KBPpOSc8GQGHi5Ike2bDg5eqoiR7ZsODl6qj2HR8mCOBI2sPlDmmpbvCkr6xUyNMbvY05uYuEGOlgX&_nc_ohc=m554PGeMQ6cAX8Km49R&_nc_ht=scontent-zrh1-1.xx&oh=00_AfAqXVU_C8lmLOsjX8AVSDPjkaFDhIAPlw9X410cVqpcUA&oe=65BF8400",
				"id": "906636898132188"
			},
			"guest_list_enabled": true,
			"is_canceled": false,
			"is_draft": false,
			"attending_count": 1,
			"interested_count": 1,
			"maybe_count": 1
		},
	],
  
  // ... Plus de données si nécessaire
};

const EventCard = ({ event }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
      <Card containerStyle={styles.cardContainer}>
        <Card.Title>{event.name}</Card.Title>
        <Card.Image source={{ uri: event.cover.source }} style={styles.cardImage}>
          <Text style={styles.imageOverlayText}>{new Date(event.start_time).toLocaleDateString()} - {new Date(event.end_time).toLocaleDateString()}</Text>
        </Card.Image>
        {isOpen && (
          <>
            <Text style={styles.description}>{event.description}</Text>
            <View style={styles.detailContainer}>
              <Text>Intéressés: {event.interested_count}</Text>
              <Text>Participants: {event.attending_count}</Text>
            </View>
          </>
        )}
      </Card>
    </TouchableOpacity>
	
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={eventData.data}
        style={styles.flatlist}
        renderItem={({ item }) => <EventCard event={item} />}
        keyExtractor={item => item.id}

      />
	<StatusBar style="light" />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  cardContainer: {
    borderRadius: 10, // Vous pouvez ajuster cette valeur selon vos préférences
    overflow: 'hidden', // Assurez-vous que le contenu de la carte respecte le border radius
  },
  cardImage: {
    borderTopLeftRadius: 10, // Correspond au borderRadius du container
    borderTopRightRadius: 10, // Correspond au borderRadius du container
  },
  flatlist: { 
    flex: 1,
  },
  description: {
    marginVertical: 10
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  imageOverlayText: {
    color: 'white',
    fontSize: 15,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 5
  }
});

export default App;