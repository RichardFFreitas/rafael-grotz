"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, DollarSign, Leaf, Shield, Zap, Home, Users } from "lucide-react"

export default function SteelFramePage() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    interesse: "",
  })

  const createWhatsAppLink = (message: string) => {
    const phoneNumber = "5521965701798" // (21) 965701798 in international format
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const personalizedMessage = `Olá! Meu nome é ${formData.nome}.

📱 Telefone: ${formData.telefone}
📧 E-mail: ${formData.email}
🏠 Interesse: ${formData.interesse}

Gostaria de garantir minha casa Steel Frame em Unamar - Cabo Frio e falar com um consultor especializado agora!`

    window.open(createWhatsAppLink(personalizedMessage), "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-teal-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance">
                  Seu novo lar em Unamar com tecnologia <span className="text-emerald-600">Steel Frame</span>: moderno,
                  sustentável e eficiente!
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed text-pretty">
                  Descubra por que cada vez mais famílias escolhem casas em Steel Frame: mais rápidas de construir, mais
                  econômicas e mais confortáveis do que as de alvenaria.
                </p>
              </div>
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg" asChild>
                <a
                  href={createWhatsAppLink(
                    "Olá! Tenho interesse em conhecer as casas Steel Frame em Unamar - Cabo Frio. Gostaria de agendar uma visita!",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  👉 Agende uma visita e conheça seu futuro lar
                </a>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/modern-steel-frame-house-exterior.png"
                alt="Casa moderna em Steel Frame"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Por que escolher Steel Frame */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Por que escolher Steel Frame?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mais rápido</h3>
                <p className="text-gray-600">Construção até 3x mais rápida que alvenaria.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardContent className="p-6 text-center">
                <DollarSign className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mais econômico</h3>
                <p className="text-gray-600">Redução de custos de obra e manutenção.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardContent className="p-6 text-center">
                <Leaf className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mais sustentável</h3>
                <p className="text-gray-600">Menos desperdício de material e uso inteligente de recursos.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardContent className="p-6 text-center">
                <Home className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mais confortável</h3>
                <p className="text-gray-600">Melhor isolamento térmico e acústico.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mais durável</h3>
                <p className="text-gray-600">Estruturas resistentes à corrosão, pragas e umidade.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mais flexível</h3>
                <p className="text-gray-600">Projetos personalizados e modernos.</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 text-center">
            <p className="text-lg text-gray-700 leading-relaxed text-pretty">
              As casas em Steel Frame são tendência mundial e estão revolucionando o mercado imobiliário no Brasil. Em
              Unamar – Cabo Frio, você pode garantir seu imóvel com essa tecnologia inovadora e viver em um lar que une
              conforto, economia e modernidade.
            </p>
          </div>
        </div>
      </section>

      {/* Comparativo */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Steel Frame x Alvenaria</h2>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-emerald-600 text-white p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Steel Frame</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Construção rápida (meses)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Economia de até 30%</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Alta eficiência térmica e acústica</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Estrutura sustentável</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Flexibilidade de projeto</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Resistência a pragas e umidade</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 text-gray-700 p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Alvenaria Tradicional</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-200 flex-shrink-0"></div>
                    <span>Construção demorada (anos)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-200 flex-shrink-0"></div>
                    <span>Custos mais altos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-200 flex-shrink-0"></div>
                    <span>Menor conforto</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-200 flex-shrink-0"></div>
                    <span>Alto desperdício de material</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-200 flex-shrink-0"></div>
                    <span>Menos flexibilidade</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-200 flex-shrink-0"></div>
                    <span>Sujeita a infiltrações e cupins</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casas em Destaque */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Casas em Destaque</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="/steel-frame-house-model-1.jpg"
                  alt="Casa Steel Frame Modelo 1"
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-emerald-600">
                  Destaque
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">
                  Chalé Steel Frame – Unamar
                </h3>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li>• 1 Quarto</li>
                  <li>• Sala integrada com cozinha americana</li>
                  <li>• Área gourmet com churrasqueira</li>
                  <li>• Isolamento térmico e acústico premium</li>
                  <li>• 36m²</li>
                  <li>• Terraço</li>
                </ul>

                <div className="">
                  <span className="text-2xl font-bold text-emerald-600">
                    R$ 99.000,00
                  </span>
                  <span className="text-sm text-gray-500 ml-2">
                    Preço especial
                  </span>
                </div>
                <p className="text-sm font-medium text-emerald-600 mb-4">
                  *Projeto pronto para instalação no seu terreno
                </p>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                  <a
                    href={createWhatsAppLink(
                      "Olá! Tenho interesse na Chalé Steel Frame - Unamar por R$ 99.000. Gostaria de mais informações e agendar uma visita!",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    👉 Quero saber mais
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="/steel-frame-house-model-2.png"
                  alt="Casa Steel Frame Modelo 2"
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-emerald-600">Novo</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Casa Steel Frame – Condomínio Unamar</h3>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li>• 2 quartos (1 suíte)</li>
                  <li>• Sala e cozinha integradas</li>
                  <li>• Varanda gourmet</li>
                  <li>• 2 vagas de garagem</li>
                  <li>• Sistema de aquecimento solar</li>
                </ul>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-emerald-600">R$ 280.000,00</span>
                  <span className="text-sm text-gray-500 ml-2">Condições especiais</span>
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                  <a
                    href={createWhatsAppLink(
                      "Olá! Tenho interesse na Casa Steel Frame - Condomínio Unamar por R$ 280.000. Gostaria de conhecer as condições especiais!",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    👉 Quero saber mais
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="/steel-frame-house-model-3.png"
                  alt="Casa Steel Frame Modelo 3"
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-orange-500">Oportunidade</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Casa Steel Frame – Vista Mar</h3>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li>• 4 quartos (2 suítes)</li>
                  <li>• Sala de estar e jantar</li>
                  <li>• Cozinha gourmet completa</li>
                  <li>• Piscina e área de lazer</li>
                  <li>• Vista para o mar</li>
                </ul>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-emerald-600">R$ 450.000,00</span>
                  <span className="text-sm text-gray-500 ml-2">Financiamento facilitado</span>
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                  <a
                    href={createWhatsAppLink(
                      "Olá! Tenho interesse na Casa Steel Frame - Vista Mar por R$ 450.000. Gostaria de saber sobre o financiamento facilitado!",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    👉 Quero saber mais
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios com a Imobiliária */}
      <section className="py-20 px-4 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Benefícios com a Imobiliária</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Equipe especializada</h3>
              <p className="text-gray-600">Profissionais especializados em casas Steel Frame</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Suporte total</h3>
              <p className="text-gray-600">Total suporte do projeto à entrega</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Parcerias locais</h3>
              <p className="text-gray-600">Parcerias com engenheiros e construtoras locais</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Financiamento fácil</h3>
              <p className="text-gray-600">Facilidade de financiamento</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Atendimento personalizado</h3>
              <p className="text-gray-600">Atendimento personalizado em Unamar – Cabo Frio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Depoimentos de Clientes</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/happy-client-couple.png"
                    alt="Carlos e Juliana"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">Carlos & Juliana</h4>
                    <p className="text-sm text-gray-500">Proprietários em Unamar</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Escolhemos o Steel Frame pela rapidez e conforto, e não poderíamos estar mais felizes. Nossa casa
                  ficou pronta em poucos meses!"
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/happy-client-family.png"
                    alt="Família Silva"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">Família Silva</h4>
                    <p className="text-sm text-gray-500">Moradores de Cabo Frio</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "A economia foi surpreendente! Gastamos 30% menos que uma casa tradicional e o conforto térmico é
                  incrível."
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-4">
                  <img src="/happy-client-woman.png" alt="Ana Paula" className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold">Ana Paula</h4>
                    <p className="text-sm text-gray-500">Investidora</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Investir em Steel Frame foi a melhor decisão. Tecnologia moderna, sustentável e com ótimo retorno."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gatilhos de Urgência */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Construa sua casa em Steel Frame em tempo recorde</h2>
          <p className="text-xl mb-8 text-emerald-100">
            Comece hoje e mude em poucos meses. Condições especiais para os primeiros compradores em Unamar – Cabo Frio.
          </p>
          <Button
            size="lg"
            className="bg-white text-emerald-600 hover:bg-gray-100 px-12 py-4 text-xl font-semibold"
            asChild
          >
            <a
              href={createWhatsAppLink(
                "Olá! Quero construir minha casa em Steel Frame em Unamar - Cabo Frio em tempo recorde. Gostaria de conhecer as condições especiais!",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              👉 Quero meu lar em Steel Frame agora
            </a>
          </Button>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Garanta sua casa em Steel Frame em Unamar – Cabo Frio
            </h2>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome completo</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="(22) 99999-9999"
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Interesse</label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  value={formData.interesse}
                  onChange={(e) => setFormData({ ...formData, interesse: e.target.value })}
                  required
                >
                  <option value="">Selecione seu interesse</option>
                  <option value="Casa Steel Frame - Praia de Unamar">Casa Steel Frame - Praia de Unamar</option>
                  <option value="Casa Steel Frame - Condomínio Unamar">Casa Steel Frame - Condomínio Unamar</option>
                  <option value="Casa Steel Frame - Vista Mar">Casa Steel Frame - Vista Mar</option>
                  <option value="Terreno para construção">Terreno para construção</option>
                  <option value="Informações gerais">Informações gerais</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 text-lg font-semibold rounded-lg transition-colors"
              >
                Falar com um consultor agora
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Imobiliária Steel Frame</h3>
              <p className="text-gray-400">
                Especialistas em casas Steel Frame em Unamar - Cabo Frio. Tecnologia moderna para seu novo lar.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <p>📱 WhatsApp: (22) 99999-9999</p>
                <p>📧 rafaelgrotzimobiliaria@gmail.com.br</p>
                <p>📍 Unamar - Cabo Frio, RJ</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Selos de Credibilidade</h4>
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="text-white border-white">
                  CRECI Ativo
                </Badge>
                <Badge variant="outline" className="text-white border-white">
                  SSL Seguro
                </Badge>
                <Badge variant="outline" className="text-white border-white">
                  Empresa Verificada
                </Badge>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Imobiliária Rafael Grotz. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
