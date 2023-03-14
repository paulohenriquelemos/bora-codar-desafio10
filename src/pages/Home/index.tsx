import { Drop, Leaf, Lightning, MapPin, Sun, Wind } from 'phosphor-react'

import umidade from '../../assets/umidade.svg'
import chuva from '../../assets/chuva.svg'
import cloudWhite from '../../assets/cloud-white.svg'
import cloudGray from '../../assets/cloud-gray.svg'
import { HorarioSol } from '../../Components/HorarioSol'

export function Home() {
  return (
    <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 z-10">
      <div className="bg-bg-card bg-center bg-cover w-full lg:w-[26rem] min-h-[26rem] rounded-lg p-3 relative flex flex-col justify-end">
        <img
          src={cloudGray}
          alt="Núvem cinza"
          className="absolute w-[23%] sm:w-auto -top-4 left-2 sm:left-0"
        />
        <img
          src={cloudWhite}
          alt="Núvem branca"
          className="absolute w-[26%] sm:w-auto -top-2 -left-4 sm:-left-12"
        />
        <span className="absolute top-8 right-8 text-purple300 text-sm font-bold flex items-center gap-1">
          <MapPin size={12} weight="fill" className="text-purple500" />
          Rio do Sul, SC
        </span>
        <div className="flex flex-col items-center justify-center absolute top-16 sm:top-[40%] left-1/2 transform -translate-x-1/2 sm:-translate-y-1/2">
          <span className="text-7xl text-white font-bold relative">
            18
            <span className="absolute text-2xl text-purple200 font-bold top-0">
              ºC
            </span>
          </span>
          <div className="flex items-center justify-center text-xl font-bold gap-2">
            <span className="text-white">22º</span>
            <span className="text-purple200">16º</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <div className="w-full bg-bgCardSmall p-3 rounded-md flex items-center justify-center gap-2">
            <Wind size={32} className="text-purple500" />
            <div className="flex flex-col">
              <span className="text-xs text-purple100">Vento</span>
              <span className="text-lg text-purple100 font-bold gap-1xa whitespace-nowrap">
                17 <span className="text-sm text-purple200">km/h</span>
              </span>
            </div>
          </div>
          <div className="w-full bg-bgCardSmall p-3 rounded-md flex items-center justify-center gap-2">
            <img src={umidade} alt="" />
            <div className="flex flex-col">
              <span className="text-xs text-purple100">Umidade</span>
              <span className="text-lg text-purple100 font-bold gap-1xa">
                31 <span className="text-sm text-purple200">%</span>
              </span>
            </div>
          </div>
          <div className="w-full bg-bgCardSmall p-3 rounded-md flex items-center justify-center gap-2">
            <img src={chuva} alt="" />
            <div className="flex flex-col">
              <span className="text-xs text-purple100">Chuva</span>
              <span className="text-lg text-purple100 font-bold gap-1xa">
                10 <span className="text-sm text-purple200">%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1 bg-purple700 p-3 pt-8 rounded-md flex flex-col items-center justify-between">
            <div className="flex items-center justify-center gap-2">
              <Leaf size={20} weight="fill" className="text-purple200" />
              <span className="text-base text-purple200 font-bold">
                Qualidade do ar
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 mt-8">
              <span className="text-lg text-green300 font-bold">Boa</span>
              <span className="text-4xl text-purple100 font-bold">21</span>
            </div>
            <div className="mt-8 flex items-center justify-between w-full">
              <div className="flex flex-col items-center justify-center">
                <span className="text-sm text-green300 font-bold">12.9</span>
                <span className="text-xs text-purple100">PM2.5</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-sm text-green300 font-bold">12.9</span>
                <span className="text-xs text-purple100">PM10</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-sm text-green300 font-bold">2.1</span>
                <span className="text-xs text-purple100">
                  SO<sub>2</sub>
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-sm text-green300 font-bold">1.4</span>
                <span className="text-xs text-purple100">
                  NO<sub>2</sub>
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-sm text-green300 font-bold">21.2</span>
                <span className="text-xs text-purple100">
                  O<sub>3</sub>
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-sm text-green300 font-bold">0.7</span>
                <span className="text-xs text-purple100">CO</span>
              </div>
            </div>
          </div>
          {/* Horário do Sol */}
          <div className="flex-1 bg-purple700 p-3 pt-8 rounded-md flex flex-col items-center justify-between">
            <div className="flex flex-col items-center justify-center gap-2 w-full">
              <div className="flex items-center justify-center gap-2">
                <Sun size={20} weight="fill" className="text-purple200" />
                <span className="text-base text-purple200 font-bold">
                  Horário do sol
                </span>
              </div>
              <div className="w-11/12 mt-6 relative">
                <span className="text-white text-sm font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  16:01
                </span>
                <HorarioSol percentage={70} />
              </div>
              <div className="w-full flex items-center justify-between">
                <span className="text-white text-xs">06:12</span>
                <span className="text-white text-xs">18:52</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-purple700 mt-6 rounded-md p-10 flex flex-col sm:flex-row gap-8 items-center justify-between">
          <div className="flex flex-col items-center justify-between">
            <span className="text-lg sm:text-sm text-purple200 font-bold">
              Amanhã
            </span>
            <div className="mt-4 h-16 relative">
              <img
                src={cloudGray}
                alt=""
                className="w-11 absolute -top-1 -right-2"
              />
              <img src={cloudWhite} alt="" className="w-11 relative" />
            </div>
            <div className="flex items-center justify-center text-base font-bold gap-2">
              <span className="text-white">21º</span>
              <span className="text-purple200">16º</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between">
            <span className="text-lg sm:text-sm text-purple200 font-bold">
              Sexta-Feira
            </span>
            <div className="mt-4 h-16">
              <Sun size={44} color="#FBDB60" weight="fill" />
            </div>
            <div className="flex items-center justify-center text-base font-bold gap-2">
              <span className="text-white">21º</span>
              <span className="text-purple200">16º</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between">
            <span className="text-lg sm:text-sm text-purple200 font-bold">
              Sábado
            </span>
            <div className="mt-4 h-16">
              <img src={cloudWhite} alt="" className="w-11" />
              <div className="mt-1 flex justify-center">
                <Drop
                  size={11}
                  weight="fill"
                  className="text-purple300 rotate-45"
                />
                <Drop
                  size={11}
                  weight="fill"
                  className="text-purple300 rotate-45"
                />
                <Drop
                  size={11}
                  weight="fill"
                  className="text-purple300 rotate-45"
                />
              </div>
            </div>
            <div className="flex items-center justify-center text-base font-bold gap-2">
              <span className="text-white">21º</span>
              <span className="text-purple200">16º</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between">
            <span className="text-lg sm:text-sm text-purple200 font-bold">
              Domingo
            </span>
            <div className="mt-4 h-16 flex flex-col items-center gap-1">
              <img src={cloudGray} alt="" className="w-11" />
              <Lightning size={13} color="#FBDB60" weight="fill" />
            </div>
            <div className="flex items-center justify-center text-base font-bold gap-2">
              <span className="text-white">21º</span>
              <span className="text-purple200">16º</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between">
            <span className="text-lg sm:text-sm text-purple200 font-bold">
              Segunda-Feira
            </span>
            <div className="mt-4 h-16 relative">
              <Sun
                size={28}
                color="#FBDB60"
                weight="fill"
                className="absolute -top-2 -left-2"
              />
              <img src={cloudWhite} alt="" className="w-11 relative" />
            </div>
            <div className="flex items-center justify-center text-base font-bold gap-2">
              <span className="text-white">21º</span>
              <span className="text-purple200">16º</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
