import { useState } from 'react';
import { z } from 'zod';

const formSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  apellido: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
  email: z.string().email("Ingrese un email válido"),
  telefono: z.string()
    .min(8, "El teléfono debe tener al menos 8 caracteres")
    .regex(/^[0-9+\-\s()]*$/, "El teléfono solo puede contener números, +, -, espacios y paréntesis"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres")
});

export default function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      nombre: formData.get('nombre') as string,
      apellido: formData.get('apellido') as string,
      email: formData.get('email') as string,
      telefono: formData.get('telefono') as string,
      mensaje: formData.get('mensaje') as string
    };

    try {
      const validatedData = formSchema.parse(data);
      const form = e.currentTarget;
      form.action = `https://formsubmit.co/agusalta002@gmail.com`;
      form.method = 'POST';
      Object.entries(validatedData).forEach(([key, value]) => {
        const input = form.elements.namedItem(key) as HTMLInputElement;
        if (input) input.value = value;
      });
      form.submit();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          const field = err.path[0] as string;
          newErrors[field] = err.message;
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <input
            type="text"
            name="nombre"
            id="nombre"
            className={`w-full px-4 py-2 rounded-lg border transition-all duration-300 text-gray-900 ${
              errors.nombre ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Nombre"
          />
          {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
        </div>
        <div>
          <input
            type="text"
            name="apellido"
            id="apellido"
            className={`w-full px-4 py-2 rounded-lg border transition-all duration-300 text-gray-900 ${
              errors.apellido ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Apellido"
          />
          {errors.apellido && <p className="text-red-500 text-sm mt-1">{errors.apellido}</p>}
        </div>
      </div>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          className={`w-full px-4 py-2 rounded-lg border transition-all duration-300 text-gray-900 ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div>
        <input
          type="tel"
          name="telefono"
          id="telefono"
          className={`w-full px-4 py-2 rounded-lg border transition-all duration-300 text-gray-900 ${
            errors.telefono ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Teléfono"
        />
        {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
      </div>
      <div>
        <textarea
          name="mensaje"
          id="mensaje"
          rows={4}
          className={`w-full px-4 py-2 rounded-lg border transition-all duration-300 text-gray-900 ${
            errors.mensaje ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Mensaje"
        />
        {errors.mensaje && <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors duration-300 disabled:opacity-50"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
      </button>
    </form>
  );
} 