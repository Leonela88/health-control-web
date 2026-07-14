'use client'
import { useFormState, useFormStatus } from 'react-dom'
import { contactAction, ContactActionState } from '@/lib/actions/contact'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useRef } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

const TIPOS_DOLOR = [
    'Dolor de espalda',
    'Rodillas y caderas',
    'Piernas, pies y tobillos',
    'Ciática',
    'Hombros y codos',
    'Dolor de cuello, cabeza y migraña',
    'Otro',
]

const initialState: ContactActionState = {
    success: false,
    message: '',
}

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <Button type="submit" disabled={pending} className="w-full">
            {pending ? 'Enviando...' : 'Enviar mensaje'}
        </Button>
    )
}

export default function ContactForm() {
    const [state, formAction] = useFormState(contactAction, initialState)
    const formRef = useRef<HTMLFormElement>(null)

    return (
        <form key={state.success ? 'submitted' : 'idle'}
            ref={formRef} action={formAction} className="space-y-5">
            {/* Nombre */}
            <div>
                <label htmlFor="nombre" className="mb-1 block text-sm font-medium">
                    Nombre <span className="text-destructive">*</span>
                </label>
                <Input id="nombre" name="nombre" placeholder="Tu nombre" />
                {state.errors?.nombre && (
                    <p className="mt-1 text-sm text-destructive">{state.errors.nombre[0]}</p>
                )}
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium">
                    Email <span className="text-destructive">*</span>
                </label>
                <Input id="email" name="email" type="email" placeholder="tu@email.com" />
                {state.errors?.email && (
                    <p className="mt-1 text-sm text-destructive">{state.errors.email[0]}</p>
                )}
            </div>

            {/* Teléfono */}
            <div>
                <label htmlFor="telefono" className="mb-1 block text-sm font-medium">
                    Teléfono <span className="text-muted-foreground text-xs">(opcional)</span>
                </label>
                <Input id="telefono" name="telefono" type="tel" placeholder="+34 600 000 000" />
            </div>

            {/* Tipo de dolor */}
            <div>
                <label htmlFor="tipoDolor" className="mb-1 block text-sm font-medium">
                    Motivo de consulta <span className="text-destructive">*</span>
                </label>
                <Select name="tipoDolor">
                    <SelectTrigger id="tipoDolor">
                        <SelectValue placeholder="Selecciona un motivo" />
                    </SelectTrigger>
                    <SelectContent>
                        {TIPOS_DOLOR.map((tipo) => (
                            <SelectItem key={tipo} value={tipo}>
                                {tipo}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {state.errors?.tipoDolor && (
                    <p className="mt-1 text-sm text-destructive">{state.errors.tipoDolor[0]}</p>
                )}
            </div>

            {/* Mensaje */}
            <div>
                <label htmlFor="mensaje" className="mb-1 block text-sm font-medium">
                    Mensaje <span className="text-destructive">*</span>
                </label>
                <Textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    rows={5}
                />
                {state.errors?.mensaje && (
                    <p className="mt-1 text-sm text-destructive">{state.errors.mensaje[0]}</p>
                )}
            </div>

            {/* Mensaje global */}
            {state.message && (
                <p className={`text-sm font-medium ${state.success ? 'text-green-600' : 'text-destructive'}`}>
                    {state.message}
                </p>
            )}

            <SubmitButton />
        </form>
    )
}