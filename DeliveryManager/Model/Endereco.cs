using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DeliveryManager.Model
{
    [Table("Endereco")]
    public class Endereco
    {
        [Key]
        [Column("id_endereco")]
        public int Id_Endereco { get; set; }

        [Column("cep")]
        public string Cep { get; set; }

        [Column("logradouro")]
        public string Logradouro { get; set; }

        [Column("numero")]
        public string Numero { get; set; }

        [Column("bairro")]
        public string Bairro { get; set; }

        [Column("cidade")]
        public string Cidade { get; set; }

        [Column("estado")]
        public string Estado { get; set; }
     
        [Column("complemento")]
        public string Complemento { get; set; }

        [Column("id_cliente")]
        public int Id_Cliente { get; set; }
    }
}
