import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import styles from '@/styles/Experiences.module.css'

export default function Experiences() {
    return (
        <section className={styles.wrapper} id='experiences'>
            <Box className={styles.container}>
                <Text className={styles.label}>Experiences</Text>
                <Box className={styles.experience}>
                    <Box className={styles.item}>
                        <Text className={styles.company}>Infinity Informations & App Dev Co.,Ltd</Text>
                        <Text className={styles.location}>BKK1, Phnom Penh, Cambodia</Text>
                        <Text className={styles.exp}>April 2024 - Current</Text>
                        <Text className={styles.position}>Frontend Developer</Text>
                        <Text className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    </Box>
                    <Box className={styles.item}>
                        <Text className={styles.company}>Village Link l Awba Entity</Text>
                        <Text className={styles.location}>Yangon, Myanmar</Text>
                        <Text className={styles.exp}>Oct 2022 - Mar 2024</Text>
                        <Text className={styles.position}>FullStack Developer</Text>
                        <Text className={styles.description}>Develop a mobile application(Htwet Toe) designed to enhance the convenience of farmers, accompanied by the establishment of an administrative panel to oversee maintenance, address software defects, and integrate progressive features.</Text>
                    </Box>
                    <Box className={styles.item}>
                        <Text className={styles.company}>AGGA.IO  l Software House</Text>
                        <Text className={styles.location}>Yangon, Myanamr</Text>
                        <Text className={styles.exp}>Dec 2020 - Sep 2022</Text>
                        <Text className={styles.position}>FullStack Developer</Text>
                        <Text className={styles.description}>Effectively oversee and engage with clients, both from private enterprises and government entities, to address their business requirements by delivering tailored IT solutions. Development of applications, websites, and CMS catering to the diverse needs of our clients.</Text>
                    </Box>
                    <Box className={styles.item}>
                        <Text className={styles.company}>Micro Service Myanmar Co.,Ltd  l Software House</Text>
                        <Text className={styles.location}>Yangon, Myanamr</Text>
                        <Text className={styles.exp}>Sep 2019 - Sep 2020</Text>
                        <Text className={styles.position}>Web Developer</Text>
                        <Text className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    </Box>
                </Box>
            </Box>
        </section>
    )
}
