import  { Input as ChakraInput, FormLabel, FormControl, InputProps, FormErrorMessage } from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';
import styles from './input.module.scss';


interface  InputFormProps extends InputProps {
    name: string;
    id: string;
    label?: string;
    error: FieldError;
}

const InputBase:ForwardRefRenderFunction<HTMLInputElement, InputFormProps> = ( { name, id, label, error, ...rest }, ref ) => {
    return <FormControl isInvalid={!!error}>
        
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
            ref={ref}
            {...rest}
        />

        { !!error && (
            <FormErrorMessage>
                {error.message}
            </FormErrorMessage>
        ) }
    </FormControl> 
};

export const Input = forwardRef(InputBase)