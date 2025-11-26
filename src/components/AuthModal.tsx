import { FormEvent, useState } from 'react';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { firebaseAuth } from '../firebase';
import { Button } from './ui/button';
import { Input } from './ui/input';

type AuthMode = 'login' | 'register' | 'reset';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export function AuthModal({ isOpen, onClose, onLoginSuccess }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const resetState = () => {
    setMessage('');
    setError('');
    setPassword('');
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');
    setMessage('');

    try {
      if (mode === 'login') {
        await signInWithEmailAndPassword(firebaseAuth, email, password);
        onLoginSuccess();
      } else if (mode === 'register') {
        const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        if (name) {
          await updateProfile(userCredential.user, { displayName: name });
        }
        onLoginSuccess();
      } else {
        await sendPasswordResetEmail(firebaseAuth, email);
        setMessage('Enviamos um link para redefinir sua senha.');
        setMode('login');
      }
    } catch (err: any) {
        setError(err?.message || 'Não foi possível concluir a ação. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const titleMap: Record<AuthMode, string> = {
    login: 'Entrar',
    register: 'Criar conta',
    reset: 'Recuperar senha',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative">
        <button
          onClick={() => {
            onClose();
            setMode('login');
            setEmail('');
            setPassword('');
            setName('');
            resetState();
          }}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Fechar"
        >
          X
        </button>

        <h2 className="text-2xl font-semibold text-gray-900 mb-6">{titleMap[mode]}</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {mode === 'register' && (
            <div>
              <label className="text-sm text-gray-700 mb-1 block">Nome</label>
              <Input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div>
            <label className="text-sm text-gray-700 mb-1 block">E-mail</label>
            <Input
              type="email"
              placeholder="voce@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {mode !== 'reset' && (
            <div>
              <label className="text-sm text-gray-700 mb-1 block">Senha</label>
              <Input
                type="password"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          )}

          {error && <p className="text-sm text-red-600">{error}</p>}
          {message && <p className="text-sm text-green-600">{message}</p>}

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
            {isSubmitting ? 'Processando...' : titleMap[mode]}
          </Button>
        </form>

        <div className="mt-4 text-sm text-gray-600 flex items-center justify-between">
          {mode !== 'reset' ? (
            <button
              type="button"
              onClick={() => {
                setMode('reset');
                resetState();
              }}
              className="hover:text-gray-900"
            >
              Esqueci minha senha
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setMode('login');
                resetState();
              }}
              className="hover:text-gray-900"
            >
              Voltar para login
            </button>
          )}

          <button
            type="button"
            onClick={() => {
              setMode(mode === 'login' ? 'register' : 'login');
              resetState();
            }}
            className="hover:text-gray-900"
          >
            {mode === 'login' ? 'Criar conta' : 'Já tenho conta'}
          </button>
        </div>
      </div>
    </div>
  );
}
