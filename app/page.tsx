"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Bed,
  Car,
  Shield,
  Clock,
  Star,
  Phone,
  Mail,
  Users,
  FileCheck,
  Building,
  Award,
  ArrowBigDownIcon,
} from "lucide-react";
import { useState } from "react";

export default function RealEstateLanding() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    imovel: "",
    mensagem: "",
  });

  const createWhatsAppLink = (message: string) => {
    const phoneNumber = "5521965701798"; // (21) 965701798 in international format
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const personalizedMessage = `Olá! Meu nome é ${formData.nome}.

📱 Telefone: ${formData.telefone}
📧 E-mail: ${formData.email}
🏠 Imóvel de interesse: ${formData.imovel}

Mensagem: ${formData.mensagem}

Gostaria de ser atendido por um consultor especializado em imóveis de Unamar - Cabo Frio.`;

    window.open(createWhatsAppLink(personalizedMessage), "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/luxury-modern-house-exterior-with-beautiful-landsc.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Seu novo lar em Unamar – Cabo Frio está aqui!
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">
            Imóveis selecionados, com localização privilegiada e condições
            especiais para você realizar o sonho da casa própria no paraíso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <a
                href={createWhatsAppLink(
                  "Olá! Gostaria de agendar uma visita aos imóveis em Unamar - Cabo Frio. Podem me ajudar?"
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                👉 Agende sua visita agora
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-foreground"
              asChild
            >
              <a
                href={createWhatsAppLink(
                  "Olá! Gostaria de ver os imóveis disponíveis em Unamar - Cabo Frio. Podem me mostrar as opções?"
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Imóveis Disponíveis
              </a>
            </Button>
            <div className="absolute bottom-[-250px] left-1/2 transform -translate-x-1/2 animate-bounce">
              <ArrowBigDownIcon size={55} />
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Clock className="h-5 w-5" />
            <span className="font-semibold">
              Últimas unidades disponíveis na região de Unamar – Cabo Frio
            </span>
            <span>com condições especiais de financiamento!</span>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Imóveis em Destaque
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Selecionamos os melhores imóveis em Unamar com localização
              privilegiada e acabamento premium
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property 1 - Residencial Vista Mar */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="/modern-luxury-apartment-living-room-with-floor-to-.webp"
                  alt="Residencial Vista Mar - Unamar"
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-destructive">
                  Últimas Unidades
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">
                  Residencial Vista Mar – Unamar
                </CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" /> Aquarius (Tamoios), Cabo Frio
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />2 quartos (1 suíte)
                    </div>
                    <div className="flex items-center gap-1">
                      <Car className="h-4 w-4" />2 vaga
                    </div>
                  </div>
                  <div>• Piscina de 5 metros</div>
                  <div>• Cisterna de 5 mil litros</div>
                  <div>• Área gourmet</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-primary">
                      R$ 250.000
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Preço especial
                    </p>
                  </div>
                  <Button asChild>
                    <a
                      href={createWhatsAppLink(
                        "Olá! Tenho interesse no Residencial Vista Mar em Unamar por R$ 250.000. Gostaria de mais informações e agendar uma visita."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      👉 Quero mais informações
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Property 2 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="/luxury-house-exterior-with-garden-and-modern-archi.webp"
                  alt="Casa Premium Unamar"
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-accent">
                  Lançamento
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Casa Premium Unamar</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Rua dos Tatus, Unamar - Cabo Frio.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />2 quartos
                    </div>
                    <div className="flex items-center gap-1">
                      <Car className="h-4 w-4" />3 vagas
                    </div>
                  </div>
                  <div>• 100 Metros da Pista</div>
                  <div>• Varanda</div>
                  <div>• Piscina de 4m com cascata</div>
                  <div>• Área gourmet com pia de granito</div>
                  <div>• Sala ampla</div>
                  <div>• Banheiro social + Banheiro externo</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-primary">
                      R$ 480.000
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Condições especiais
                    </p>
                  </div>
                  <Button asChild>
                    <a
                      href={createWhatsAppLink(
                        "Olá! Tenho interesse na Casa Premium Unamar por R$ 480.000. Gostaria de conhecer as condições especiais e agendar uma visita."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      👉 Quero mais informações
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Property 3 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="/modern-penthouse-terrace-with-city-view-and-luxury.webp"
                  alt="Apartamento Frente Mar Unamar"
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-primary">
                  Exclusivo
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">
                  Casa Com Vista para o Mar
                </CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Estr. Deodoro de Azevedo | Vista para o mar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />4 quartos (2 suíte)
                    </div>
                    <div className="flex items-center gap-1">
                      <Car className="h-4 w-4" />2 vaga
                    </div>
                  </div>
                  <div>• Área construída: 300 m²</div>
                  <div>• 2 piscinas</div>
                  <div>• Área gourmet completa</div>
                  <div>• Salão de jogos</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-primary">
                      R$ 1.700.000
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Oportunidade única
                    </p>
                  </div>
                  <Button asChild>
                    <a
                      href={createWhatsAppLink(
                        "Olá! Tenho interesse na Casa Com visao pro Mar em Unamar por R$ 1.700.000. Gostaria de mais informações sobre esta oportunidade única."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      👉 Quero mais informações
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Benefícios de Comprar com Nossa Imobiliária
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Especialistas em Unamar - Cabo Frio com atendimento diferenciado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Atendimento Personalizado
              </h3>
              <p className="text-muted-foreground">
                Atendimento personalizado e rápido com consultores
                especializados
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Segurança Jurídica</h3>
              <p className="text-muted-foreground">
                Total segurança jurídica em todas as etapas do processo
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Financiamento Facilitado
              </h3>
              <p className="text-muted-foreground">
                Parcerias com os melhores bancos para financiamento facilitado
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Imóveis Exclusivos</h3>
              <p className="text-muted-foreground">
                Imóveis exclusivos em Unamar – Cabo Frio
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultores Locais</h3>
              <p className="text-muted-foreground">
                Consultores locais que conhecem a região e suas oportunidades
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Depoimentos de Clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">
                  "Comprei minha casa de praia com essa imobiliária e tudo foi
                  muito tranquilo. Atendimento excelente e documentação sem dor
                  de cabeça!"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="/professional-woman-smiling-headshot.png"
                    alt="Ana Paula"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Ana Paula</p>
                    <p className="text-sm text-muted-foreground">
                      Cliente satisfeita
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">
                  "Profissionais extremamente competentes. Nos ajudaram com toda
                  a documentação e conseguimos um financiamento com condições
                  excelentes em Unamar."
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="/professional-man-smiling-headshot.png"
                    alt="Carlos Silva"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Carlos Silva</p>
                    <p className="text-sm text-muted-foreground">Empresário</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">
                  "Encontraram o imóvel perfeito para minha família em Cabo
                  Frio. Processo rápido e transparente do início ao fim!"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="/professional-woman-smiling-headshot-business-attir.png"
                    alt="Mariana Costa"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Mariana Costa</p>
                    <p className="text-sm text-muted-foreground">Professora</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Últimas unidades disponíveis na região de Unamar – Cabo Frio
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Não perca essa oportunidade única: imóveis com valorização garantida
            e prontos para morar.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-4"
            asChild
          >
            <a
              href={createWhatsAppLink(
                "Olá! Vi que são as últimas unidades disponíveis em Unamar - Cabo Frio. Gostaria de reservar meu imóvel hoje mesmo!"
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              👉 Reserve seu imóvel hoje mesmo
            </a>
          </Button>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                Dê o próximo passo para conquistar seu novo lar em Unamar – Cabo
                Frio
              </h2>
              <p className="text-xl text-muted-foreground text-balance">
                Fale com um de nossos consultores especializados
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Entre em contato</CardTitle>
                  <CardDescription>
                    Preencha o formulário e entraremos em contato em até 2 horas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Nome
                        </label>
                        <Input
                          placeholder="Seu nome completo"
                          value={formData.nome}
                          onChange={(e) =>
                            setFormData({ ...formData, nome: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Telefone
                        </label>
                        <Input
                          placeholder="(22) 99999-9999"
                          value={formData.telefone}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              telefone: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        E-mail
                      </label>
                      <Input
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Imóvel de interesse
                      </label>
                      <Input
                        placeholder="Qual imóvel em Unamar deseja conhecer?"
                        value={formData.imovel}
                        onChange={(e) =>
                          setFormData({ ...formData, imovel: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Mensagem
                      </label>
                      <Textarea
                        placeholder="Conte-nos mais sobre o que procura em Unamar..."
                        value={formData.mensagem}
                        onChange={(e) =>
                          setFormData({ ...formData, mensagem: e.target.value })
                        }
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Quero ser atendido agora
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">
                    Fale conosco diretamente
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Telefone</p>
                        <p className="text-muted-foreground">(21) 96570-1798</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">E-mail</p>
                        <p className="text-muted-foreground">
                          rafaelgrotzimobiliaria@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Endereço</p>
                        <p className="text-muted-foreground">
                          Av. Sideral, Loja 1 - Verão Vermelho 2, Unamar - Cabo Frio, RJ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">🔥 Oferta Especial</h4>
                  <p className="text-sm text-muted-foreground">
                    Agende uma visita esta semana e ganhe uma consultoria
                    gratuita de financiamento imobiliário!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Imóveis Unamar</h3>
              <p className="text-sm opacity-80 mb-4">
                Sua imobiliária especializada em Unamar - Cabo Frio há mais de
                15 anos.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Transação 100% segura</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>Parceiro dos principais bancos</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Venda de imóveis</li>
                <li>Locação</li>
                <li>Consultoria imobiliária</li>
                <li>Financiamento facilitado</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Região</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Unamar - Cabo Frio</li>
                <li>Centro de Cabo Frio</li>
                <li>Praia do Forte</li>
                <li>Região dos Lagos</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>(21) 96570-1798</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>rafaelgrotzimobiliaria@gmail.com</span>
                </div>
                <div>WhatsApp: (21) 96570-1798</div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2025 Imóveis Unamar. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
