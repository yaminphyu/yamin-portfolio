import React from 'react'
import styles from '@/styles/Projects.module.css'
import { Box, Link, Text } from '@chakra-ui/react'
import { SelfMakedProjects } from '@/config'

export default function Projects() {
    return (
        <section className={styles.wrapper} id='projects'>
            <Box className={styles.container}>
                <Text className={styles.label}>Projects</Text>
                <Box className={styles.project}>
                    {
                        SelfMakedProjects.map((item, index) => (
                            <Box 
                                className={styles.item}
                                key={index}
                            >
                                <Link 
                                    className={styles.link} 
                                    href={item.url}
                                >
                                    <Text className={styles.name}>{item.name}</Text>
                                </Link>
                                <Text className={styles.technology}>{item.technology}</Text>
                                <Text className={styles.description}>{item.description}</Text>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </section>
    )
}
