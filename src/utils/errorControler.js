function ErrorControler(error, res){
    if(error instanceof ErrorLetra) {
        return res.status(501).json({ message: error.message });
      }
      return res.status(500).json({ message: "Erro ao dividir"});
}