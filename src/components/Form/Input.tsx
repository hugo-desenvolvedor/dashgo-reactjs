import  { Input as ChakraInput, ChakraInputProps, FormLabel, FormControl } from '@chakra-ui/react';
import styles from './input.module.scss';


interface  InputFormProps extends ChackraInputProps {
    name: string,
    id: string,
    label?: string
}

export default function Input ( { name, id, label, ...rest }: InputFormProps ) {
    return <FormControl>
        
        { !!label && <FormLabel htmlFor="email" className={styles.label}>{name}</FormLabel>}
        
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