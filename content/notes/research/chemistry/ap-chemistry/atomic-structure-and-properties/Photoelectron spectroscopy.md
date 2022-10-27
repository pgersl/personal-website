---
title: "Photoelectron spectroscopy"
layout: note
toc: true
pm: true
---
# Photoelectric effect
> If a photon of high enough energy hits an electron with binding energy equal or lower to the energy of the photon, the electron is emitted from the atom and is from then called a photoelectron.
- the energy needed to emit an electron is called the _work function_ - $\Phi$
    - it represents the binding energy of an electron
    - the binding energy of an electron is determined by the energy level it is on
- the work function can be calculated as:
$$\Phi=h\nu_0$$
- where:
    - $h$ is the _Planck's constant_ ($\approx{6.626\cdot{10^{-34}}J\cdot{s}}$)
    - $\nu_0$ is the _frequency of the electron_ (behaving both as a particle and as a wave)
- the energy of an photon can be calculated as:
$$E=h\nu$$
- where:
    - $\nu$ is the _frequency of the photon (behaving both as a particle and as a wave)
- the kinetic energy of an emitted electron - $E_{k,e}$ can then be calculated as:
$$E_{k,e}=h\nu-\Phi$$
- from this equation, we can also get the work function
$$\Phi=h\nu-E_{k,e}$$
- this equation is commonly rewritten including the _wavelength of the photons_
$$\Phi=\cfrac{hc}{\lambda}-E_{k,e}$$
- where:
    - $c$ is the _speed of light_ ($=299,792,458\ m\cdot{s^{-1}}$)
    - $\lambda$ is the _wavelength of the photon_
# Photoelectron spectrometer
- **_photoelectron spectrometer_** is a device which can shine a beam of light of a certain frequency on a sample and then detect the kinetic energies of emitted electrons

{{< fig class="note-fig" src="https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FPetrGersl%2FdtDl2qLSym.png?alt=media&token=804d966c-c0c3-48a4-bb6f-1b5059cf9fe6" alt="Simplified scheme of a photoelectron spectroemter" >}}

- different photon sources are used depending on the wavelength of photons needed to emit the intermost electrons

{{< fig class="note-fig" src="https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FPetrGersl%2FrSWmXTI4Zd.png?alt=media&token=4a0e8dec-26cc-4c5f-aef5-45786ed962e5" alt="Electromagnetic spectrum" >}}

# Reading energy spectra
- results of photoelectron spectroscopy are plotted on a graph, where the y-axis represents the relative number of emitted electrons and the x-axis represents the energy needed to emit them (in $MJ\cdot{mol^{-1}}$)
- the intermost electrons will have higher energies needed to emit them (_ionization energy_)
- the biggest gaps of ionization energies are between electrons on different energy levels of the electron shell

{{< fig class="note-fig" src="https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FPetrGersl%2F6AN5ap5N-d.png?alt=media&token=6a9fd59d-713a-4b19-93a1-b5b087c5cf34" alt="Results of photoelectron spectroscopy of boron" >}}

- the wavelength of light needed to emit an electron can be calculated as:
$$\lambda=\cfrac{hc}{\Phi}$$
- the work function needs to first be converted from $MJ\cdot{mol^{-1}}$ to $J$ using $\cfrac{10^6}{N_A}$
- the final formula looks like this:
$$\lambda=\cfrac{hcN_A}{\Phi\cdot{10^6}}$$