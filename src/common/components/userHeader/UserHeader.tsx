import React, { useState } from "react";
import { Avatar, Burger, Container, createStyles, Group, Menu, rem, Text, UnstyledButton } from "@mantine/core";
import avatar from "../../../assets/user.png";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "common/hooks";
import { IconChevronDown, IconHome, IconLogout } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";


const useStyles = createStyles((theme) => ({
	header: {
		paddingTop: theme.spacing.sm,
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
		borderBottom: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]
		}`,
		marginBottom: rem(120),
	},
	
	mainSection: {
		paddingBottom: theme.spacing.sm,
	},
	
	user: {
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
		padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
		borderRadius: theme.radius.sm,
		transition: 'background-color 100ms ease',
		
		'&:hover': {
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
		},
		
		[theme.fn.smallerThan('xs')]: {
			display: 'none',
		},
	},
	
	burger: {
		[theme.fn.largerThan('xs')]: {
			display: 'none',
		},
	},
	
	userActive: {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
	},
}));

export const UserHeader: React.FC = ( ) => {
	
	const userName = useAppSelector(state => state.profile.profile?.name)

	const { classes, theme, cx } = useStyles();
	
	const [opened, { toggle }] = useDisclosure(false);
	
	const [userMenuOpened, setUserMenuOpened] = useState(false);
	
	return (
		<div>
			<Container className={classes.mainSection}>
				<Group position="apart">
					
					<Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
					
					<Menu
						width={260}
						position="bottom-start"
						transitionProps={{ transition: 'pop-top-right' }}
						onClose={() => setUserMenuOpened(false)}
						onOpen={() => setUserMenuOpened(true)}
						withinPortal
					>
						<Menu.Target>
							<UnstyledButton
								className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
							>
								<Group spacing={7}>
									<Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
										{userName && userName }
									</Text>
									<Avatar src={avatar} alt="" radius="xl" size={ 40 } />
									<IconChevronDown size={rem(12)} stroke={1.5} />
								</Group>
							</UnstyledButton>
						</Menu.Target>
						<Menu.Dropdown>
							<NavLink to={'/profile'} style={{textDecoration: "none"}}>
							<Menu.Item
								icon={<IconHome size="1rem" color={theme.colors.red[6]} stroke={1.5} />}>
								Profile
							</Menu.Item>
							</NavLink>
							<NavLink  to={'/profile'}>
							<Menu.Item
								icon={<IconLogout size="1rem" color={theme.colors.yellow[6]} stroke={1.5} />}
							>
								Log Out
							</Menu.Item>
							</NavLink>
						</Menu.Dropdown>
					</Menu>
				</Group>
			</Container>
		</div>
	);
};