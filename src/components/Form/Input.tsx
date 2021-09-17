import  { Input as ChakraInput, FormLabel, FormControl, InputProps } from '@chakra-ui/react';
import styles from './input.module.scss';


interface  InputFormProps extends InputProps {
    name: string,
    id: string,
    label?: string,
}

export default function Input ( { name, id, label, ...rest }: InputFormProps ) {
    return <FormControl>
        
        { !!label && <FormLabel htmlFor="email" className={styles.label}>{label}</FormLabel>}
        
        <ChakraInput
            name={name}
            id={id}
            focusBorderColor="pink.500"
            bgColor="gray.900"
            variant="filled"
            _hover={{
                bgColor: "gray.900"
            }}
            size="lg"
            {...rest}
        />        
    </FormControl> 
};