        // Variável de controle
        let audioAtual = null;

        function tocarAudio(nomeArquivo) {
            // Se já tiver um áudio tocando, para ele
            if (audioAtual) {
                audioAtual.pause();
                audioAtual.currentTime = 0;
            }

            // AJUSTE AQUI: O código adiciona 'audio/' automaticamente antes do nome
            const caminhoCompleto = 'audio/' + nomeArquivo;
            
            audioAtual = new Audio(caminhoCompleto);
            
            audioAtual.play().catch(function(erro) {
                console.log("Erro: " + erro);
                alert("Erro! Não encontrei o arquivo em: " + caminhoCompleto);
            });
        }