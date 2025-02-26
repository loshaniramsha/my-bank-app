import {Dimensions, View, StyleSheet, TouchableOpacity, Text} from "react-native";
import PoppinsText from "@/layout/poppins-text";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { SwiperFlatList } from "react-native-swiper-flatlist";

interface INavigation {
    openDrawer: () => void;
}

const { width: screenWidth } = Dimensions.get("window");
const CARD_WIDTH = screenWidth * 0.8; // Adjust to take up most of the screen width
const CARD_MARGIN = 30;

const AccountDetails = () => {
    const navigation: INavigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Greeting & Menu Icon */}
            <View style={styles.header}>
                <TouchableOpacity onPress={navigation.openDrawer}>
                    <Entypo name="menu" size={28} color="black" style={styles.menuIcon} />
                </TouchableOpacity>

                <PoppinsText style={styles.greetingText}>
                    Hi <PoppinsText style={styles.nameText}>Loshani</PoppinsText>
                </PoppinsText>

                <TouchableOpacity>
                    <FontAwesome5 name="bell" size={24} color="black" />
                </TouchableOpacity>
            </View>
            {/* Account Swiper */}
            <AccountSwiper />
        </View>
    );
};

/* Swiper */
const accountData = [1, 2, 3, 4];

const AccountSwiper = () => {
    return (
        <View style={styles.swiperContainer}>
            <SwiperFlatList
                autoplay
                autoplayDelay={3}
                autoplayLoop
                showPagination
                pagingEnabled
                paginationActiveColor="white"
                paginationDefaultColor="gray"
                data={accountData}
                paginationStyle={{ position: "absolute", bottom: -20 }}
                index={0} // Start at first account
                snapToAlignment="center"
                snapToInterval={CARD_WIDTH} // Ensure snapping happens at each card's width
                decelerationRate="fast"
                renderItem={({ item }) => <AccountCard number={item} />}
            />
        </View>
    );
};

/* Account Card */
const AccountCard = ({ number }: { number: number }) => {
    return (
        <View style={[cardStyles.card, { width: CARD_WIDTH }]}>
            <PoppinsText style={cardStyles.cardText}>Account {number}</PoppinsText>
            <PoppinsText style={cardStyles.amountText}>Rs.50,000.00</PoppinsText>
        </View>
    );
};

/* Styles */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        paddingVertical: 20,
        paddingHorizontal: 15,
        backgroundColor: "orange",
        alignItems: "center",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    menuIcon: {
        marginRight: 10,
    },
    greetingText: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
    },
    nameText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    swiperContainer: {
        width: screenWidth,
        marginTop: 20,
    },
});

const cardStyles = StyleSheet.create({
    card: {
        height: 160,
        backgroundColor: "#101010",
        borderRadius: 20,
        marginBottom:10,
        marginHorizontal: CARD_MARGIN,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    cardText: {
        color: "orange",
        fontSize: 16,
        fontWeight: "bold",
    },
    amountText: {
        color: "white",
        fontSize: 20,
        marginTop: 22,
    },
});

export default AccountDetails;
