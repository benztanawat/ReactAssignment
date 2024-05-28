import { Button } from "@ui-kitten/components";
import { useDisabledSubmitButton } from "./hooks/useDisabledSubmitButton";
import { useSearchUser } from "./hooks/useSearchUser";
import { GestureResponderEvent } from 'react-native';

const SubmitButton = () => {
    const disabled = useDisabledSubmitButton();
    const searchUser = useSearchUser(); 

    const handlePress = (event: GestureResponderEvent) => {
        event.preventDefault();
        searchUser(); 
    }

    return (
        <Button status="primary" disabled={disabled} onPress={handlePress} size="large">
            search button
        </Button>
    );
};

export default SubmitButton;